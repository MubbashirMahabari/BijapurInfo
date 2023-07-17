import React, { Component } from 'react';


export class NewsItem extends Component {
  render() {

    // pass the props here down side
    let { title, description, imgUrl, newsUrl, date, source } = this.props;

    return (
      <div className='my-4 mx-5'>
        <div className="card" style={{ height: "400px" }}>


          {/* this span for show name of source at the corner of the card */}
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '100%', zIndex: '1' }}>
            {source}
          </span>

          <img src={!imgUrl ? "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg" : imgUrl} className="card-img-top" alt="" style={{ height: "200px" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-primary">{new Date(date).toGMTString()}</small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read More..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
