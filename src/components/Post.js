export const Post = ({title, description, image}) => {
    return (
        <div className='col-md-6 col-lg-4'>
            <div className="card mb-4">
            <img src={'https://picam.confemac.net/api-rest/public' + image} alt={title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            </div>
        </div>
    )
}