import React, { Component } from "react";

import Pagination from "./components/pagination";
import paginate from "react-easy-paginate";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(), //from api
    });
  }

  onPageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  render() {
    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          itemCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageClick={this.onPageChange}
        />
      </div>
    );
  }
}

export default Movies;
