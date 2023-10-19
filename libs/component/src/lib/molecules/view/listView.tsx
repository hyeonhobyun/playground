import { ReactNode } from 'react';
import { useStyletron } from 'styletron-react';
import { StyleObject } from '@playground/component/component.types';
import { Property } from 'csstype';

interface ListViewProps<T> {
  data: T[];
  rowGap?: string;
  renderContent: (props: T, index: number) => ReactNode;
  className?: StyleObject;
  scrollSnapType?: Property.ScrollSnapType;
}

type ListViewDefaultData =
  | unknown
  | (Record<string, unknown> & {
      id: number;
    });

// TODO:: pagination 추가 필요
const ListView = <T extends ListViewDefaultData>({
  data,
  rowGap = '0px',
  renderContent,
  scrollSnapType = 'y proximity',
}: ListViewProps<T>) => {
  const [css] = useStyletron();

  return (
    <article
      className={css({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: rowGap,
        scrollSnapType: scrollSnapType,
        height: '100vh',
      })}
    >
      {data?.map((item, index) => renderContent?.(item, index))}
    </article>
  );
};

export type { ListViewProps };
export { ListView };
