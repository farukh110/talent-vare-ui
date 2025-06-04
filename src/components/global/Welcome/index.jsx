import './index.scss';

const Welcome = ({ title, customClass, otherTitle, text }) => {
    return (
        <>
            <div className={`welcome ${customClass}`}>
                <h1> {title} <span>{otherTitle}</span></h1>
                <p> {text} </p>
            </div>
        </>
    )
}

export default Welcome;