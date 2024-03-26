import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    if (imageUrl == null) {
      imageUrl =
        "https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg";
    }

    // console.log(imageUrl);

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }}
          >
            <span
              class="badge rounded-pill bg-danger " >
            
            
            
              {source}
            </span>
          </div>

          <img
            src={imageUrl}
            className="card-img-top"
            alt="image Did Not Load"
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              
              <small className="text-muted">
                By {!author ? "unknown" : author} on {date}{" "}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
