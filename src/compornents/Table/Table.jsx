import React from 'react'
import styles from './Table.module.css'


export default function Table({ data }) {
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
            {data.map(item => (
            <tr key={item.id}>
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
