import footerStyle from '../styles/footer.module.css'
const Footer = () => {
    return(
        <div className={footerStyle.footer}>
            <div className={footerStyle.inner_footer}>
                <div className={footerStyle.footer_third}>
                    <h1>Plagiarism Checker</h1>
                    <a href="#">For personal uses</a>
                </div>
                <div className={footerStyle.footer_third}>
                    <h1>Built By</h1>
                    <a href="#">&copy; Karthikan Murugathas</a>
                </div>
                <div className={footerStyle.footer_third}>
                    <h1>Plagiarism Checker</h1>
                    <a href="#">Terms &amp; Conditions</a>
                    <a href="#">Privacy &amp; Policy</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;    