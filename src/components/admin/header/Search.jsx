import React, { Component } from "react";

export class Search extends Component {
  searchResults = (obj) => {
    let comp;
    if (obj.id === 1) {
      comp = obj.children.map((data, idata) => {
        return (
          <div key={`${idata}${obj.id}`} className="search-item">
            <a href="#">{data.title}</a>
            <a href="#" className="search-close">
              <i className="fas fa-times" />
            </a>
          </div>
        );
      });
    } else if (obj.id === 2) {
      comp = obj.children.map((data, idata) => {
        return (
          <div key={`${idata}${obj.id}`} className="search-item">
            <a href="#">
              <img
                className="mr-3 rounded"
                width="30"
                src={data.img}
                alt="product"
              />
              {data.title}
            </a>
          </div>
        );
      });
    } else if (obj.id === 3) {
      comp = obj.children.map((data, idata) => {
        return (
          <div key={`${idata}${obj.id}`} className="search-item">
            <a href="#">
              <div className={`search-icon ${data.backCls} text-white mr-3`}>
                <i className={data.icode} />
              </div>
              {data.title}
            </a>
          </div>
        );
      });
    }

    return comp;
  };

  render() {
    const { searchResultData } = this.props;

    return (
      <>
        <div className="search-element">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            data-width="250"
          />
          <button className="btn" type="submit">
            <i className="fas fa-search" />
          </button>
          <div className="search-backdrop" />
          <div className="search-result">
            {searchResultData.map((content, icontent) => {
              let comp;

              comp = (
                <React.Fragment key={icontent}>
                  <div key={icontent} className="search-header">
                    {content.headerTitle}
                  </div>

                  {this.searchResults(content)}
                </React.Fragment>
              );

              return comp;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
