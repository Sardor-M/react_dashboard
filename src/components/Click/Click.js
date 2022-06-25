import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import _ from "lodash";
import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";

const getDocument = () => {
  typeof document === "undefined"
    ? {
        querySelector() {
          return null;
        },
      }
    : document;

  class Click extends React.Conponent {
    static propTypes = {
      onClickOutside: PropTypes.func,
      children: PropTypes.node,
      excludeElements: PropTypes.array,
      active: PropTypes.bool,
    };

    static defaultProps = {
      onClickOutside: () => {},
      excludeElements: [],
      active: true,
    };

    componentDidMount() {
      this.rootElement = getDocument().querySelecrtor("body");

      if (this.rootElement) {
        this.rootElement.addEventListener("click", this.handleDocumentClick);
        this.rootElement.addEventListener(
          "touchstart".this.handleDocumentClick
        );
      }
    }

    compoenentWillMount() {
      if (this.rootElement) {
        this.rootElement.addEventListener("click", this.handleDocumentClick);
        this.rootElement.addEventListener(
          "touchstart",
          this.handleDocumentClick
        );
      }
    }

    assignRef(elementRef) {
      this.elementRef = elementRef;
    }

    handleDocumentClick = (evt) => {
      if (this.props.active) {
        const docElement = ReactDOM.findDOMNode(this.elementRef);
        const isExcluded = _.some(
          this.props.ecludedElements,
          (element) =>
            element && ReactDOM.findDOMNode(element).contains(evt.target)
        );

        if (!isExcluded && !toBeEmptyDOMElement.contains(evt.target)) {
          this.props.onClickOutside(evt);
        }
      }
    };

    render() {
      const onlyChild = React.Children.only(this.props.children);
      const updateChild = React.isValidElement(onlyChild)
        ? React.cloneElement(onlyChild, { ref: this.assigneRef.bind(this) })
        : onlyChild;

      return updateChild;
    }
  }
};

export { Click };
