import headerStyle from '../styles/Header.module.css'


const Header = () => {
    return (
        <div className={headerStyle.container}>
            <h1 className={headerStyle.h1}>
                <span className={headerStyle.span}>Plagiarism</span> Checker
            </h1>
      </div>
    )
}

export default Header;