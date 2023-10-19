import { useEffect } from 'react';
import { useStyletron } from 'styletron-react';
import smokeHeadMain from '@playground/asset/src/lib/images/image_smoke_head_high_voltage.png';
import { NextImageImport } from '@playground/feature/src/lib/helper/type/types';
import Image from 'next/image';
import { padding } from 'polished';

const _smokeHeadMain = smokeHeadMain as unknown as NextImageImport;

interface Test1PageProps {
  query: Record<string, string>;
}

const Test1Page = ({ query }: Test1PageProps) => {
  const [css] = useStyletron();

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div
      className={css({
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        height: '100vh',
        width: '100vw',
      })}
    >
      <section
        className={css({
          scrollSnapAlign: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <div
          className={css({
            width: '100%',
            height: '100%',
            position: 'relative',
          })}
        >
          <Image
            src={_smokeHeadMain.src}
            blurDataURL={_smokeHeadMain.blurDataURL}
            alt="고전압"
            placeholder="blur"
            fill
            className={css({
              objectFit: 'contain',
            })}
          />
        </div>
      </section>

      <section
        className={css({
          scrollSnapAlign: 'center',
          height: '100vh',
        })}
      >
        <div
          className={css({
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',

            ...padding('', '70px'),
          })}
        >
          <div
            className={css({
              maxHeight: '100%',
              width: '420px',
              height: '490px',
              backgroundColor: '#d9d9d9',
            })}
          >
            정보
          </div>
          <div
            className={css({
              maxHeight: '100%',
              width: '420px',
              height: '490px',
              backgroundColor: '#d9d9d9',
            })}
          >
            정보
          </div>
          <div
            className={css({
              maxHeight: '100%',
              width: '420px',
              height: '490px',
              backgroundColor: '#d9d9d9',
            })}
          >
            정보
          </div>
        </div>
      </section>

      <section
        className={css({
          scrollSnapAlign: 'center',
          height: '100vh',
        })}
      >
        <div
          className={css({
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',

            ...padding('', '70px'),
          })}
        >
          <div
            className={css({
              maxHeight: '100%',
              width: '200px',
              height: '600px',
              backgroundColor: '#d9d9d9',
            })}
          >
            맛
          </div>
          <div
            className={css({
              maxHeight: '100%',
              width: '100%',
              height: '600px',
              backgroundColor: '#d9d9d9',
            })}
          >
            맛
          </div>
        </div>
      </section>

      <section
        className={css({
          scrollSnapAlign: 'center',
          height: '100vh',
        })}
      >
        <div
          className={css({
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',

            ...padding('', '70px'),
          })}
        >
          <div
            className={css({
              maxHeight: '100%',
              width: '200px',
              height: '600px',
              backgroundColor: '#d9d9d9',
            })}
          >
            향
          </div>
          <div
            className={css({
              maxHeight: '100%',
              width: '100%',
              height: '600px',
              backgroundColor: '#d9d9d9',
            })}
          >
            향
          </div>
        </div>
      </section>

      <section
        className={css({
          scrollSnapAlign: 'center',
          height: '100vh',
        })}
      >
        <div
          className={css({
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',

            ...padding('', '70px'),
          })}
        >
          <div
            className={css({
              maxHeight: '100%',
              width: '100%',
              height: '850px',
              backgroundColor: '#d9d9d9',
            })}
          >
            테이스팅
          </div>
        </div>
      </section>

      <section
        className={css({
          scrollSnapAlign: 'center',
          height: '100vh',
        })}
      >
        <div
          className={css({
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',

            ...padding('', '70px'),
          })}
        >
          <div
            className={css({
              maxHeight: '100%',
              width: '100%',
              height: '850px',
              backgroundColor: '#d9d9d9',
            })}
          >
            스토리
          </div>
        </div>
      </section>

      <section
        className={css({
          scrollSnapAlign: 'center',
          height: '100vh',
        })}
      >
        <div
          className={css({
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',

            ...padding('', '70px'),
          })}
        >
          <div
            className={css({
              maxHeight: '100%',
              width: '100%',
              height: '850px',
              backgroundColor: '#d9d9d9',
            })}
          >
            후기
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test1Page;
