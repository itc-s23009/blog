import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'
const Pagination = ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = ''
}) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <span>className={styles.iconText}</span>
            <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
            <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <span> className={styles.iconText}</span>
          <span>{nextText}</span>
          <FontAwesomeIcon icon={faChevronRight} color='var(--gray-25)' />
        </li>
      )}
    </ul>
  )
}
export default Pagination
