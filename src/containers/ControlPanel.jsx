import React, { useState } from 'react'
import { Layout, Button } from 'antd';
import _ from 'lodash';
import styles from './controlPanel.less';
import { SearchOutlined } from '@ant-design/icons';
import shuzi1 from '../assets/svgs/shuzi1.svg';
import shuzi2 from '../assets/svgs/shuzi2.svg';
import shuzi3 from '../assets/svgs/shuzi3.svg';
import shuzi5 from '../assets/svgs/shuzi5.svg';
import shuzi6 from '../assets/svgs/shuzi6.svg';
import shuzi7 from '../assets/svgs/shuzi7.svg';
import shuzi8 from '../assets/svgs/shuzi8.svg';
import shuzi9 from '../assets/svgs/shuzi9.svg';
import shuzi10 from '../assets/svgs/shuzi10.svg';
import shuzi11 from '../assets/svgs/shuzi11.svg';
import shuzi12 from '../assets/svgs/shuzi12.svg';
import shuzi15 from '../assets/svgs/shuzi15.svg';
import shuzi16 from '../assets/svgs/shuzi16.svg';
import shuzi17 from '../assets/svgs/shuzi17.svg';
import shuzi19 from '../assets/svgs/shuzi19.svg';
import shuzi20 from '../assets/svgs/shuzi20.svg';
import shuzi21 from '../assets/svgs/shuzi21.svg';
import shuzi22 from '../assets/svgs/shuzi22.svg';

const { useEffect } = React;
const { Header, Footer, Content } = Layout;
const svgList = { shuzi1, shuzi2, shuzi3, shuzi5, shuzi6, shuzi7, shuzi8, shuzi9, shuzi10, shuzi11, shuzi12, shuzi15, shuzi16, shuzi17, shuzi19, shuzi20, shuzi21, shuzi22 };

function ControlPanel() {
  const [floorNow, setfloorNum] = useState('');
  const [onClickNow, setCLickNum] = useState([]);

  // componentDidMount阶段
  useEffect(()=>{ floorRender(); }, []);

  // 获取全部楼层数
  const floorRender = () => {
    let floorNum = [];
    const expectNum = [4, 13, 14, 18, 23, 24];
    for(let i = 1; i < 25; i++) {
      const expect = _.some(expectNum, item => item === i);
      if (!expect) {
        floorNum.push(i);
      }
    }
    setfloorNum(floorNum);
    return floorNum;
  };

  // 获取电梯内被按下的楼层
  const imgOnClick = e => {
    const value = e.target.alt;
    // 判断所选楼层是否已存在
    const hasItem = _.some(onClickNow, item => item === value);
    if (hasItem) {
      _.remove(onClickNow, item => item === value);
    } else {
      onClickNow.push(value);
      onClickNow.sort((a, b) => a - b);
    }
    setCLickNum([...onClickNow]);
    console.log(onClickNow);
  }

  // 渲染电梯内部楼层按钮
  const floorNumList = _.map(floorNow, (item, index) => {
    const isLight = _.some(onClickNow, i => Number(i) === Number(item))
    return (<div style={{ width: '100px', display:'inline-block', margin: '2px', position: 'relative', backgroundColor: `${isLight ? '#fff' : ''}`, height: '100px' }}>
      <img
        key={`${item}+${index}`}
        style={{
          hergit: '50px',
          width: '50px',
          position: 'absolute',
          margin: '0 auto',
          lineHeight: '100px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
       }}
        className={styles.img}
        src={svgList[`shuzi${item}`]}
        alt={item}
        value={item}
        onClick={imgOnClick}
      />
    </div>)
  });


  return (
    <div className={styles.outside} style={{ userSelect: 'none' }}>
      <Layout>
        <Header>Header</Header>
        <Content>
          <div style={{ height: '600px', width: '320px', backgroundColor: 'rgb(46, 46, 46)', justifyContent: 'center' }}>
            {floorNumList}
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default ControlPanel;
