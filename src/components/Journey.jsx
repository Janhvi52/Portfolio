import './Journey.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {MdSchool} from "react-icons/md";
import {FaUniversity} from "react-icons/fa";
import {MdWork} from "react-icons/md";

const Journey = () => {
  return (
    <div id="journey">
   <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2023"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<MdWork/>}
  ><h3 className="vertical-timeline-element-title">KM UnoTag Pvt Ltd.</h3>
  <h4 className="vertical-timeline-element-subtitle">SDE Intern</h4>
    <p>
    A product-based startup Unomok is an incentive gamification platform that also provides notification management for customer service.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2020-2024"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<FaUniversity/>}
  ><h3 className="vertical-timeline-element-title">Bangalore Institute of Technology</h3>
<h4 className="vertical-timeline-element-subtitle">Bangalore, Karnataka</h4>
    <p>
    B.E. in Information Science and Engineering | CGPA: 9.26
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018-2020"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<MdSchool/>}
  ><h3 className="vertical-timeline-element-title">Sri Chaitanya Techno School</h3>
  <h4 className="vertical-timeline-element-subtitle">VisakhaPatnam,Andhra Pradesh</h4>
    <p>
    Senior Secondary School | Percentage: 94.4%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2018"
    iconStyle={{ background: 'var( --color-bg-variant)', color: 'var( --color-white)' }}
    icon={<MdSchool/>}
  ><h3 className="vertical-timeline-element-title">DAV Public School</h3>
  <h4 className="vertical-timeline-element-subtitle">Aurangabad, Bihar</h4>
    <p>
    High School | Percentage: 92.2%
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
    </div>
  )
}

export default Journey