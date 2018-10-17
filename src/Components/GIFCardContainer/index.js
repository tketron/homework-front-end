import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroller';

import GIFCard from '../GIFCard';
import './GIFCardContainer.css';

export default class GIFCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      queryPath: this.props.queryURL,
      gifs: [],
      offset: 0,
      remaining: 1
    };
  }

  /**
   * Query API with specified URL and offset, updating state with new data, offset, and remaining items.
   */
  fetchMoreGIFs() {
    axios
      .get(`${this.state.queryPath}&offset=${this.state.offset}`)
      .then(data => {
        this.setState(prevState => ({
          gifs: [...prevState.gifs, ...data.data.data],
          loading: false,
          offset: data.data.pagination.count + data.data.pagination.offset,
          remaining:
            data.data.pagination.total_count -
            data.data.pagination.count -
            data.data.pagination.offset
        }));
      })
      .catch(err => console.error(err));
  }

  render() {
    let gifs = this.state.gifs.map(gif => <GIFCard key={gif.id} gif={gif} />);

    return (
      <InfiniteScroll
        loadMore={this.fetchMoreGIFs.bind(this)}
        hasMore={this.state.remaining > 0}
        initialLoad={true}
        loader={
          <ReactLoading
            id="GIFCardContainer-loading-animation"
            type="bubbles"
            color="#fff"
            height="20%"
            width="20%"
            key={1}
          />
        }
      >
        <div className="GIFCardContainer">{gifs}</div>
      </InfiniteScroll>
    );
  }
}
