import React, { Component } from 'react';
import BaseModuleTemplate from '../../../../templates/BaseModuleTemplate';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class Surround extends Component {
  render() {
      return (
          <BaseModuleTemplate moduleName="360 Degree View" tagColor="green">
              <Tabs defaultActiveKey="1">
                  <TabPane tab="Stream 1" key="1">
                      <img src="http://93.95.74.169/axis-cgi/mjpg/video.cgi" className="camera-stream"/>
                  </TabPane>
              </Tabs>
          </BaseModuleTemplate>
        );
    }
}

export default Surround;
