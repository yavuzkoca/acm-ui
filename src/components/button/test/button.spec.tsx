import React from "react";
import Button from "../button";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";

Enzyme.configure({
    adapter: new Adapter()
});

describe("button specs", () => {
   it("should render button component", () => {
       const word = faker.random.word();
       const wrapper = shallow(<Button>{word}</Button>);
       expect(wrapper.find(".acm-button").exists()).toEqual(true);
   });

    it("should take size prop when its given", () => {
        const sizeClass = faker.lorem.word();
        const wrapper = shallow(<Button size={sizeClass}>Hello world</Button>);
        expect(wrapper.find(`.acm-button__${sizeClass}`).exists()).toEqual(true);
    });

    it("should take fluid prop when its given", () => {
        const fluidProp = true;
        const wrapper = shallow(<Button fluid={fluidProp}>Hello world</Button>);
        expect(wrapper.find(`.acm-button__fluid`).exists()).toEqual(true);
    });

    it("should not take fluid prop when its not given", () => {
        const fluidProp = false;
        const wrapper = shallow(<Button fluid={fluidProp}>Hello world</Button>);
        expect(wrapper.find(`.acm-button__fluid`).exists()).toEqual(false);
    });
});
