import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Buttton } from 'antd'

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Buttton type="primary">button</Buttton>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
