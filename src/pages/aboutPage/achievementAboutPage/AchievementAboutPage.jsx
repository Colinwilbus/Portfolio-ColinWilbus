import React from "react";
import "./AchievementAboutPageStyle.scss";
import { Tabs, Steps } from "antd";

function callback(key) {
  console.log(key);
}
const { Step } = Steps;
const { TabPane } = Tabs;
export default function AchievementAboutPage() {
  return (
    <div className="achievementAboutPage">
      <div className="achievementAboutPage__content">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Educations" key="1">
            <div className="achievementAboutPage__item">
              <Steps progressDot current={-1} direction="vertical">
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step title="Finished" description="This is a description." />
                <Step title="Finished" description="This is a description." />
              </Steps>
            </div>
          </TabPane>
          <TabPane tab="Works" key="2">
            <div className="achievementAboutPage__item">
              <Steps progressDot current={-1} direction="vertical">
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step title="Finished" description="This is a description." />
                <Step title="Finished" description="This is a description." />
              </Steps>
            </div>
          </TabPane>
          <TabPane tab="Favorites" key="3">
            <div className="achievementAboutPage__item">
              <Steps progressDot current={-1} direction="vertical">
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step title="Finished" description="This is a description." />
                <Step title="Finished" description="This is a description." />
              </Steps>
            </div>
          </TabPane>
          <TabPane tab="Skills" key="4">
            <div className="achievementAboutPage__item">
              <Steps progressDot current={-1} direction="vertical">
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step
                  title="Finished"
                  description="This is a description. This is a description."
                />
                <Step title="Finished" description="This is a description." />
                <Step title="Finished" description="This is a description." />
              </Steps>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
