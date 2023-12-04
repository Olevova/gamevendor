'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { NoSection } from './NoSectionPart';
import { SectionForm } from './SearchSectionForm';
import { SortIcon } from 'components/icons/SortIcon';
import { BasketIcon } from 'components/icons/BasketIcon';
import first from 'assets/images/sections/first.png';
import second from 'assets/images/sections/second.png';
import third from 'assets/images/sections/third.png';
import fourth from 'assets/images/sections/fourth.png';
import fiveth from 'assets/images/sections/fiveth.png';
import { LinkButton } from 'ui/components/Button';
import { ArrowLeft, ArrowRight } from 'components/icons/ArrowIcons';
import s from './Sections.module.scss';
import ReactPaginate from 'react-paginate';
import { ROUTES } from 'constants/routes';
import { useItemsStore } from './ItemStore';

interface PaginationProps {
  itemsPerPage: number;
}

const itemsOfSection = [
  {
    index: 1,
    title: 'Running',
    icon: first,
    value: 100,
    subcategory: 'Account, Diamond, Pre Order',
    date: '02/06/20, 14:30',
    offers: 357,
  },
  {
    index: 2,
    title: 'Alternative guidance councilor',
    icon: second,
    value: 100,
    subcategory: 'Account, Pre Order',
    date: '01/06/20, 09:30',
    offers: 426,
  },
  {
    index: 3,
    title: 'Chess',
    icon: third,
    value: 100,
    subcategory: 'Account',
    date: '02/06/20, 14:30',
    offers: 357,
  },
  {
    index: 4,
    title: 'Basketball',
    icon: fourth,
    value: 100,
    subcategory: 'Diamond, Pre Order',
    date: '02/06/20, 14:30',
    offers: 540,
  },
  {
    index: 5,
    title: 'Funnyfacing',
    icon: fiveth,
    value: 100,
    subcategory: 'Account, Diamond, Pre Order',
    date: '02/06/20, 14:30',
    offers: 357,
  },
];

export const SectionItems: FC<PaginationProps> = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const { setItems, deleteItem, sortItems, items } = useItemsStore();
  const t = useTranslations('ProfilePage.Sections');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setItems(itemsOfSection);
  }, [setItems]);

  useEffect(() => {
    if (isInView) {
    }
  }, [isInView]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const currentItems = items.slice(itemOffset, itemOffset + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      {items.length ? (
        <>
          <SectionForm />
          <section className={s.context}>
            <table className={s.table}>
              <thead className={s.table_header}>
                <tr>
                  <th className={s.table_row}>
                    Title
                    <button title="sort" onClick={() => sortItems('title')}>
                      <SortIcon />
                    </button>
                  </th>
                  <th className={s.table_row}>Subcategories</th>
                  <th className={s.table_row}>
                    Created Date
                    <button title="sort" onClick={() => sortItems('date')}>
                      <SortIcon />
                    </button>
                  </th>
                  <th className={s.table_row}>
                    Offers
                    <button title="sort" onClick={() => sortItems('offers')}>
                      <SortIcon />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <tr key={item.index}>
                    <th className={s.table_row}>
                      <div className={s.table_offers}>
                        <div className={s.table_icon}>
                          <Image
                            src={item.icon}
                            width={40}
                            height={20}
                            alt={item.title}
                          />
                        </div>
                        {item.title.length > 19
                          ? item.title.slice(0, 19) + '...'
                          : item.title}
                      </div>
                    </th>
                    <th className={s.table_row}>{item.subcategory}</th>
                    <th className={s.table_row}>{item.date}</th>
                    <th className={s.table_row}>
                      <div className={s.table_offers}>
                        {item.offers}
                        <button
                          type="button"
                          title="Delete"
                          onClick={() => deleteItem(item.index)}
                        >
                          <BasketIcon />
                        </button>
                        <LinkButton
                          href={ROUTES.PRIVATE.SECTIONDITAILS}
                          className={s.table_button}
                        >
                          <ArrowRight />
                        </LinkButton>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <div className={s.pagination}>
            <ReactPaginate
              breakLabel="..."
              nextLabel={<ArrowRight />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<ArrowLeft />}
              renderOnZeroPageCount={null}
              initialPage={0}
              activeClassName={s.selected}
            />
          </div>
        </>
      ) : (
        <NoSection />
      )}
    </>
  );
};
