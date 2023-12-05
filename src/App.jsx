import './App.less'
import Time from './components/time'
import Search from './components/search'
import Content from './components/content'

function App() {

    return (
        <>
            <div className="container">
                <Time />
                <Search />
                <Content />
            </div>
        </>
    )
}

export default App
