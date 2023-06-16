import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { mode, title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <>  
                <div className="card w-100" style={{ backgroundColor: mode === "dark" ? "#1f2937" : "white", color: mode === "dark" ? "white" : "black"}}>
                    <img src={!imageUrl ? "https://media.istockphoto.com/id/479607780/photo/good-news-concept-metal-letterpress-type.jpg?s=612x612&w=0&k=20&c=VFHXJBlQ_kemQzgeqR5TBsp9mLc5Kg0JE357N3Jt2As=" : imageUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small style={{color : mode === "dark"?"rgba(255,255,255,0.55)":"rgba(0,0,0,0.65)"}}>By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-dark btn-sm">Read more</a>
                    </div>
                </div>
                {/* <div class="card ">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={!imageUrl ? "https://media.istockphoto.com/id/479607780/photo/good-news-concept-metal-letterpress-type.jpg?s=612x612&w=0&k=20&c=VFHXJBlQ_kemQzgeqR5TBsp9mLc5Kg0JE357N3Jt2As=" : imageUrl} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{title}</h5>
                                <p class="card-text">{description}</p>
                                <a href={newsUrl} className="btn btn-primary">Read more</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
        )
    }
}

export default NewsItem