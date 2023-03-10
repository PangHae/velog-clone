import { FC, MouseEventHandler, useState } from 'react';
import cx from 'classnames';

import Tag from '@/components/base/Tag';

import { ReactComponent as Facebook } from '@/assets/facebook.svg';
import { ReactComponent as Twitter } from '@/assets/twitter.svg';
import { ReactComponent as Copy } from '@/assets/copy.svg';
import { ReactComponent as Like } from '@/assets/like.svg';
import { ReactComponent as Share } from '@/assets/share.svg';

import '@/styles/components/articleHeader.scss';

interface Props {
  title: string;
  userName: string;
}

const tagList = ['React', 'frontend'];

const ArticleHead: FC<Props> = ({ title, userName }) => {
  const [currentCX, setCurrentCX] = useState('not-active');

  const handleClickShare: MouseEventHandler<HTMLDivElement> = () => {
    setCurrentCX((prevState) => {
      if (prevState) {
        return '';
      }
      return 'not-active';
    });
  };

  return (
    <section className="article-head">
      <h1>{title}</h1>
      <div className="post-info">
        <div>
          <span className="username">{userName}</span>
          <span className="separator">·</span>
          <span>2023년 3월 7일</span>
        </div>
      </div>
      <div className="tags">
        {tagList.map((value) => (
          <Tag text={value} />
        ))}
      </div>
      <div className="likes">
        <div className="likes-position">
          <div className="social-wrapper">
            <div className="like-icon">
              <Like />
            </div>
            <div className="like-count">175</div>
            <div className="sns">
              <div className="positioner">
                <div className={cx('sns-icon', currentCX)}>
                  <div className="icon-wrapper">
                    <Facebook />
                  </div>
                </div>
                <div className="sns-icon">
                  <div className={cx('sns-icon', currentCX)}>
                    <Twitter />
                  </div>
                </div>
                <div className="sns-icon">
                  <div className={cx('sns-icon', currentCX)}>
                    <Copy />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="share-icon" onClick={handleClickShare}>
                <Share />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-of-contents" />
    </section>
  );
};

export default ArticleHead;
