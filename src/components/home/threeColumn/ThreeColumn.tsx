import Image from 'next/image';

import { getThreeColumnData } from '@/actions/rawActions';
import { ThreeColumn } from '@/definitions/definitions';

import styles from './ThreeColumn.module.scss';

/**
 * Represents a three-column layout component.
 * This component fetches data for the three-column layout and renders it accordingly.
 *
 * @returns The JSX structure for the three-column layout.
 */
async function ThreeColumn() {
  const data: ThreeColumn = getThreeColumnData();
  if (!data) {
    return;
  }

  return (
    <div className='container'>
      <div className='row'>
        <h3 className='text-lg-center mb-5'>{data?.title}</h3>
      </div>
      <div className='row'>
        <div className='col-md-4 col-lg-4'>
          <h5>{data?.column1?.header}</h5>
          <Image
            src={data?.column1?.image?.src}
            alt={data?.column1?.image?.alt}
            height={254}
            width={408}
            className='mb-4'
          />
        </div>
        <div className='col-md-4 col-lg-4'>
          <p>{data?.column2?.p1}</p>
          <p>{data?.column2?.p2}</p>
        </div>
        <div className='col-md-4 col-lg-4'>
          <ul className={styles.arrowList}>
            {data?.column3?.ul?.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
          <p>{data?.column3?.p}</p>
        </div>
      </div>
    </div>
  );
}

export default ThreeColumn;
