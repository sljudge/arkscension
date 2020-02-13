import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    pricesContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem',
        margin: '4rem',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    pricesTable: {
        color: 'whitesmoke',
        maxWidth: '800px',
        borderSpacing: '1rem'
    },
    pricesTableHead: {
        fontSize: '1.5rem'
    },
    pricesHeaderRow: {
        border: '1px solid white',
        textAlign: "center",
    }
})

const Prices = props => {
    return (
        <div className={css(styles.pricesContainer)}>
            <table className={css(styles.pricesTable)}>
                <thead className={css(styles.pricesTableHead)}>
                    <tr>
                        <th>Prices</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={css(styles.pricesHeaderRow)}>
                        <td>Treatment often consist of  three or four sessions. Although sometimes one session is enough. The first session lasts approximately 60 minutes and subsequent sessions are shorter.</td>
                    </tr>
                    <tr />
                    <tr className={css(styles.pricesTableRow)}>
                        <td>First Session:</td>
                        <td>£40</td>
                    </tr>
                    <tr className={css(styles.pricesTableRow)}>
                        <td>Subsequent Sessions:</td>
                        <td>£30</td>
                    </tr>
                    <tr className={css(styles.pricesTableRow)}>
                        <td>Babies and Children:</td>
                        <td>£10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Prices