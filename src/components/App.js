import React, { useState } from 'react'

import Cover from './Cover'
import Nav from './Nav'
import NavLink from './NavLink'
import Logo from './Logo'
import ContentPanel from './ContentPanel'
import ContentContainer from './ContentContainer'
import Mandala from './Mandala'
import Quote from './Quote'
import Text from './Text'

const App = () => {
    const [show, setShow] = useState(true)

    return (
        <>
            <Cover>
                {/* <About /> */}
                {/* <img src='./moods/vectors/abstract.svg'></img> */}
                {/* <img src='./moods/vectors/americana.svg'></img> */}
                {/* <img src='./moods/mandalas/pink.svg'></img> */}
                <Nav show={show}>
                    <NavLink title={'Meditation'} icon={'meditation'} setShow={() => setShow(true)} />
                    <NavLink title={'Bowen Therapy'} icon={'leaf'} setShow={() => setShow(true)} />
                    <Logo setShow={() => setShow(false)} show={show} />
                    <NavLink title={'Energy Therapy'} icon={'energy'} setShow={() => setShow(true)} />
                    <NavLink title={'Blog'} icon={'blog'} setShow={() => setShow(true)} />
                </Nav>
                <ContentPanel show={show}>

                    <Text title="Meditation">
                        <p>
                            I have been meditating for over 20 years; it has been a journey full of amazing and magical experiences and so much evolution and learning. I feel so passionately about the gifts that Meditation brings and feel honoured to be able to offer these gifts forward. Sharing what works Well and some of the pitfalls, as well as great Tools and Techniques but most of all an doing so with the Humble Energy of Love.
                                </p>
                    </Text>
                    <Quote color='blue'>
                        <p>
                            As Meditation becomes more a part of who you are, moment to moment, it becomes effortless, joyous; something which you drop into. An opening of space… for higher wisdom, guidance and universal love to come through.
                                </p>
                    </Quote>
                    <Text>
                        <p>
                            If you would like to bring more focus to your Meditation Practice it can be really helpful to observe where you are currently and how you feel in relation to it, through asking questions. I have put a few examples which work well below:
                                </p>
                    </Text>

                </ContentPanel>
            </Cover>
        </>
    )
}

export default App