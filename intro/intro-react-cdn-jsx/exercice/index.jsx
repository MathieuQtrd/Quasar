const root = document.getElementById('root')


ReactDOM.createRoot(root).render(
    <main className="container py-5">        
        <h1 className="border-bottom border-dark pb-3 text-center mb-5">React introduction</h1>

        <img src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" className="img-thumbnail w-100 mb-3" />

        <ul className="p-5 border border-dark mt-5">
            <li>
                <a href="../../intro-js/index.html">Intro-js</a>
            </li>
            <li>
                <a href="../../intro-react-cdn/index.html">Intro-react</a>
            </li>
            <li>
                <a href="../../intro-react-cdn-jsx/index.html">Intro-react-jsx</a>
            </li>
        </ul>
        <p className="mt-5 border border-dark p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum dignissimos eveniet quod officiis. Omnis velit, magni perspiciatis possimus minus iusto necessitatibus atque temporibus placeat iure sunt voluptatibus non odit sequi.
        </p>
    </main>
)
