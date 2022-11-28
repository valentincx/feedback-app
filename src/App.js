import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'

import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedBack] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedBack([newFeedback,...feedback])
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedBack(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats  feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} /></>
            }>
                
                </Route>
                <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App