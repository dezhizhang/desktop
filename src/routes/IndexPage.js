import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Button } from "antd"

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Button type="primary">button</Button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
