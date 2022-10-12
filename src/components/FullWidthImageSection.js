function FullWidthImageSection(props) {

    return (
        <div className="container-fluid full-img-section" style={{backgroundImage: `url(${props.src})`}}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <a href={props.link}>{props.linkText}</a>
        </div>
    )
}

export default FullWidthImageSection;