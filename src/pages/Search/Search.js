import { useState } from 'react';
import Header from '../../components/Navigation/Header/Header'
import { FaSearch, FaCaretDown } from "react-icons/fa";
import './Search.css'

const Search = () => {

    const logs = [
        { id: 0, time: '08/07/2022 09:46:55PM', event: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries` },
        { id: 1, time: '08/07/2022 09:46:55PM', event: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries` },
        { id: 1, time: '08/07/2022 09:46:55PM', event: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries` },
    ]

    const totalEvents = `(${logs.length})`

    const [openLog, setOpenLog] = useState()

    const handleOpenLog = (index) => {
        setOpenLog(index)
        if (index === openLog) {
            setOpenLog()
        }
    }

    return (
        <main className='background__topographic'>
            <Header />
            <section className='search'>
                <h1 className='search__title'>Search</h1>
                <div className='search__inputs'>
                    <input className='search__input' placeholder='Search for a log' type='text' />
                    <button className='search__button'><FaSearch /></button>
                </div>
                <div className='search__line'></div>
                <div className='search__events'>
                    <h1>Events{totalEvents}</h1>
                    <div className='search__pagination'></div>
                </div>
                {logs.length > 0 ? (
                    <>
                        <div className='search__logs'>
                            {logs.map((log, index) => {

                                const logClass = openLog === index ? 'search__log__active' : 'search__log'

                                return (
                                    <div className={logClass} key={log.id}>
                                        <div className='search__infos'>
                                            <div className='search__time'>{log.time}</div>
                                            <div className='search__event'>{log.event}</div>
                                        </div>
                                        <button className='search__icon' onClick={() => handleOpenLog(index)}><FaCaretDown /></button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='search__find'>Search another log</div>
                    </>
                ) : (
                    <div className='search__find'>Search for a log!</div>
                )}
            </section>
        </main>
    )
}

export default Search
