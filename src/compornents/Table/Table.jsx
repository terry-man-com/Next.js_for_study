import React from 'react'
import styles from './Table.module.css'

const dummyData = [
    {
        date: '2025-1-1',
        name: 'Taro',
        task: 'Coding',
        comment: '50%'
    }, {
        date: '2025-1-1',
        name: 'Taro',
        task: 'Coding',
        comment: '70%'
    }, {
        date: '2025-1-1',
        name: 'Taro',
        task: 'Coding',
        comment: '100%'
    }
]
export default function Table() {
  return (
    <table className={styles.table}>
        <thead className={styles.tableHead}>
            <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Task</th>
                <th>Comment</th>
            </tr>
        </thead>
        <tbody className={styles.tableBody}>
            {dummyData.map(item => (
            <tr>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.task}</td>
                <td>{item.comment}</td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}
