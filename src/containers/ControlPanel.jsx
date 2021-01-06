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
import shuzi13 from '../assets/svgs/shuzi13.svg';
import shuzi14 from '../assets/svgs/shuzi14.svg';
import shuzi15 from '../assets/svgs/shuzi15.svg';
import shuzi16 from '../assets/svgs/shuzi16.svg';
import shuzi17 from '../assets/svgs/shuzi17.svg';
import shuzi19 from '../assets/svgs/shuzi19.svg';
import shuzi20 from '../assets/svgs/shuzi20.svg';
import shuzi21 from '../assets/svgs/shuzi21.svg';

const { Header, Footer, Content } = Layout;
const svgList = { shuzi1, shuzi2, shuzi3, shuzi5, shuzi6, shuzi7, shuzi8, shuzi9, shuzi10, shuzi11, shuzi12, shuzi13, shuzi14, shuzi15, shuzi16, shuzi17, shuzi19, shuzi20, shuzi21 };

function ControlPanel() {
  React.useEffect(()=>{
    floorRender();
  },  []);
  React.useEffect(()=>{
    console.log("每次更新后对会执行",  floorNow);
  });
  const [state, setState] = useState({});

  const floorRender = () => {
    let floorNum = [];
    const expectNum = [4, 13, 14, 23, 24];
    for(let i = 0; i < 25; i++) {
      const expect = _.some(expectNum, item => item === i);
      if (!expect) {
        floorNum.push(i);
      }
    }
    setState({ floorNow: floorNum });
    return floorNum;
  };

  const { floorNow } = state;
  const floorNumList = _.map(floorNow, (item, index) => {
    console.log(item, floorNow);
    return (
      <img className={styles.img} src={svgList[`shuzi${index + 1}`]} alt="logo" />
    )
  })

  return (
    <div className={styles.outside}>
      <Layout>
        <Header>Header</Header>
        <Content>
          <div style={{  height: '600px', width: '300px', backgroundColor: '#ccc' }}>
            {floorNumList}
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default ControlPanel;
