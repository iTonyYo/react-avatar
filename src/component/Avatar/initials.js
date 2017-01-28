// @flow

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import cn from 'classnames';
import FullCanvas from 'react-fullcanvas';

let styles = {
  default: {
    layer: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0
    },
    initials: {
      color: '#000',
      fontWeight: 200,
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '14px',
      fontFamily: "-apple-system, 'Helvetica Neue', Helvetica, 'Nimbus Sans L', Arial, 'Liberation Sans', 'PingFang SC', 'Hiragino Sans GB', 'Source Han Sans CN', 'Source Han Sans SC', 'Microsoft YaHei', 'Wenquanyi Micro Hei', 'WenQuanYi Zen Hei', 'ST Heiti', SimHei, 'WenQuanYi Zen Hei Sharp', sans-serif",
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
};

@Radium
class Initials extends Component {
  static contextTypes = {
    alt: PropTypes.string
  };
  static propTypes = {
    size: PropTypes.number.isRequired,
    text: PropTypes.string,
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.object
    ]),
    className: PropTypes.string
  }
  constructor(props: Object, context: Object) {
    super(props, context);
  }
  render() {
    let {
      size,
      text,
      style,
      className
    } = this.props;
    return (
      <FullCanvas
       style={ styles.default.layer }
       className={ cn('avatar-initials', className) }>
       <span style={ [styles.default.initials, style, {fontSize: size + 'px'}] }>
        { text }
       </span>
      </FullCanvas>
    );
  }
}

export default Initials;