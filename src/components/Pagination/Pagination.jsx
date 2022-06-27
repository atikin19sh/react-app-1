import React from "react";
import styles from './Pagination.module.css';
import axios from 'axios';

class Pagination extends React.Component {
  componentDidMount() {
    axios.get(`${this.props.AxiosURL}?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setItems(response.data.items);
        this.props.setTotalItemsCount(response.data.totalCount);
      });
  };

  onPageButtonClick(pageNumber) {

    let enteredPageNumber = pageNumber;
    let pagesCount = Math.ceil(this.props.totalItemsCount / this.props.pageSize);

    if (pageNumber === '...') enteredPageNumber = prompt('Enter page you want to go:', 1);
    if (enteredPageNumber > pagesCount) {
      alert('Cannot select page more than last page! You will be redirected to the last page');
      enteredPageNumber = pagesCount;
    } else if (enteredPageNumber < 1) {
      alert('Cannot select page less than 1! You will be redirected to the first page');
      enteredPageNumber = 1;
    } else if (enteredPageNumber === undefined || isNaN(enteredPageNumber) || enteredPageNumber == null) {
      alert('Unappropriate page number!');
      return;
    }

    this.props.setCurrentPage(+enteredPageNumber);
    axios.get(`${this.props.AxiosURL}?page=${+enteredPageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setItems(response.data.items);
      });
  };

  onPageSizeChange(pageSize) {
    this.props.setPageSize(pageSize);
    axios.get(`${this.props.AxiosURL}?page=${this.props.currentPage}&count=${pageSize}`)
      .then(response => {
        this.props.setItems(response.data.items);
      });
  };

  render() {

    let pagesCount = Math.ceil(this.props.totalItemsCount / this.props.pageSize);

    let CP = this.props.currentPage;
    const pages = [];
    pages.push(1);
    switch (CP) {
      case 1:
        pages.push(CP + 1, CP + 2, '...');
        break;
      case 2:
        pages.push(CP, CP + 1, CP + 2, '...');
        break;
      case 3:
        pages.push(CP - 1, CP, CP + 1, CP + 2, '...');
        break;
      case 4:
        pages.push(CP - 2, CP - 1, CP, CP + 1, CP + 2, '...');
        break;
      case pagesCount - 3:
        pages.push('...', CP - 2, CP - 1, CP, CP + 1, CP + 2);
        break;
      case pagesCount - 2:
        pages.push('...', CP - 2, CP - 1, CP, CP + 1);
        break;
      case pagesCount - 1:
        pages.push('...', CP - 2, CP - 1, CP);
        break;
      case pagesCount:
        pages.push('...', CP - 2, CP - 1);
        break;
      default:
        pages.push('...', CP - 2, CP - 1, CP, CP + 1, CP + 2, '...');
        break;
    }
    pages.push(pagesCount);

    let createPageButton = (pageNumber) => {
      return <span onClick={() => { this.onPageButtonClick(pageNumber) }} className={this.props.currentPage === pageNumber && styles.selectedPage}>{pageNumber}</span>
    };
    return (
      <div>
        <div className={styles.pageButtons}>
          {
            pages.map(p => createPageButton(p))
          }
        </div>
        <div className={styles.pageSizeSelection}>
          View:
          <span onClick={() => this.onPageSizeChange(5)}
            className={this.props.pageSize === 5 && styles.selectedPageSize}>5</span>
          <span onClick={() => this.onPageSizeChange(10)}
            className={this.props.pageSize === 10 && styles.selectedPageSize}>10</span>
          <span onClick={() => this.onPageSizeChange(50)}
            className={this.props.pageSize === 50 && styles.selectedPageSize}>50</span>
        </div>
      </div>
    );
  }
}

export default Pagination;