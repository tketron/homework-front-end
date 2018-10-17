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

  componentDidMount() {
    // this.updateGIFs();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.queryPath !== this.props.queryURL) {
  //     console.log('update called');
  //     console.log(prevState.queryPath);
  //     console.log(this.props.queryURL);
  //     // this.setState(
  //     //   { queryPath: this.props.queryURL, loading: true, offset: 0, gifs: [] },
  //     //   () => {
  //     //     // if (this.state.offset) this.fetchMoreGIFs();
  //     //     // if (this.state.offset === 0) this.updateGIFs();
  //     //   }
  //     // );
  //   }
  // }

  // static getDerivedStateFromProps(props, state) {
  //   // Any time the current user changes,
  //   // Reset any parts of state that are tied to that user.
  //   // In this simple example, that's just the email.
  //   if (props.queryURL !== state.queryPath) {
  //     return {
  //       queryPath: props.queryURL,
  //       gifs: 0,
  //       offset: 0
  //     };
  //   }
  //   return null;
  // }

  // componentWillReceiveProps(prevProps, prevState) {
  //   if (prevState.queryPath !== this.props.queryURL) {
  //     console.log('update called');
  //     console.log(prevState.queryPath);
  //     console.log(this.props.queryURL);
  //     this.setState(
  //       { queryPath: this.props.queryURL, loading: true, offset: 0, gifs: [] },
  //       () => {
  //         // if (this.state.offset) this.fetchMoreGIFs();
  //         // if (this.state.offset === 0) this.updateGIFs();
  //       }
  //     );
  //   }
  // }

  /**
   *
   */
  fetchMoreGIFs() {
    axios
      .get(`${this.state.queryPath}&offset=${this.state.offset}`)
      .then(data => {
        this.setState(prevState => ({
          gifs: [...prevState.gifs, ...data.data.data],
          loading: false,
          offset: data.data.pagination.count + data.data.pagination.offset + 1,
          remaining:
            data.data.pagination.total_count -
            data.data.pagination.count -
            data.data.pagination.offset
        }));
      })
      .catch(err => console.error(err));
  }

  /**
   *
   */
  updateGIFs() {
    axios
      .get(this.state.queryPath)
      .then(data => {
        this.setState({
          gifs: data.data.data,
          loading: false,
          offset: data.data.pagination.count + data.data.pagination.offset
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    let gifs = this.state.gifs.map(gif => <GIFCard key={gif.id} gif={gif} />);

    return (
      <InfiniteScroll
        // pageStart={0}
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
          />
        }
      >
        <div className="GIFCardContainer">{gifs}</div>
        {this.state.loading && (
          <div className="GIFCardContainer-loading">
            <ReactLoading
              id="GIFCardContainer-loading-animation"
              type="bubbles"
              color="#fff"
              height="20%"
              width="20%"
            />
          </div>
        )}
      </InfiniteScroll>
    );
  }
}
