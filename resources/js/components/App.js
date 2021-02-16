import React, { useEffect, useState } from "react";
//components
import { Nav } from './Nav'
import { MainBtn } from './Misc'
import Banner from './Banner'

const App = props => {
    const [pages, setPages] = useState([])
    const [activePage, setActivePage] = useState()

    const getData = async () => {
        const response = await fetch('/api/pages')
        const data = await response.json()
        data.forEach(page => {
            page.blocks = page.blocks ? JSON.parse(page.blocks) : []
        })
        setPages(data)
    }


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (pages && !activePage) {
            setActivePage(pages[0])
        }
    }, [pages])


    return (
        <>
            {
                !!activePage &&
                <>
                    <Nav pages={pages} setPages={setPages} activePage={activePage} setActivePage={setActivePage} isAdmin={false} />

                </>
            }
            <div className="h-screen bg-center bg-cover bg-no-repeat relative" style={{ backgroundImage: 'url(/img/tree.jpg)', height: 'calc(100vh - 4rem)' }}>
                <div className="flex justify-center items-center absolute bottom-0 right-0 left-0" >
                    <h1 className="text-white py-4">Arkscension</h1>
                </div>
            </div>

            {!!activePage && activePage.blocks.map(block => {
                console.log(block)
                const data = block.data
                switch (block.type) {
                    case ('banner'):
                        return <Banner header={data.header} subHeader={data.subHeader} imgUrl={data.imgUrl} white={data.white} />
                    default:
                        break;
                }
            })}


        </>
    )
}

export default App