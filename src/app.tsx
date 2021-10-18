import React from "react";
// import { Graph, Addon, Shape } from "@antv/x6";
import { Graph, Addon} from "@antv/x6";

import "./shape.tsx";
import "@antv/x6-react-shape";
import "./app.css";

const { Stencil } = Addon;
// const { Rect, Circle } = Shape;

export default class Example extends React.Component <any, any>{
  private container: HTMLDivElement;
  private stencilContainer: HTMLDivElement;
  constructor(props: any) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event: any) {
    if (this.state.value === "beginner") {
      alert('Your favorite flavor is: ' + this.state.value);
    }
    event.preventDefault();
  }

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      grid: true,
      snapline: {
        enabled: true,
        sharp: true
      },
      scroller: {
        enabled: true,
        pageVisible: false,
        pageBreak: false,
        pannable: true
      }
    });
    graph.bindKey(['meta+b', 'ctrl+b'], () => {
      const source = graph.addNode({
        x: 130,
        y: 30,
        width: 100,
        height: 40,
        attrs: {
          label: {
            text: "Hello",
            fill: "#6a6c8a"
          },
          body: {
            stroke: "#31d0c6"
          }
        }
      });

      const target = graph.addNode({
        x: 320,
        y: 240,
        width: 100,
        height: 40,
        attrs: {
          label: {
            text: "World",
            fill: "#6a6c8a"
          },
          body: {
            stroke: "#31d0c6"
          }
        }
      });

      graph.addEdge({ source, target });

      return false
    })

    // }
    
    graph.centerContent();

    const stencil = new Stencil({
      title: "Components",
      target: graph,
      search: true,
      collapsable: true,
      stencilGraphWidth: 200,
      stencilGraphHeight: 180,
      groups: [
        {
          name: "group1",
          title: "Group 1",
          graphHeight: 200,
          layoutOptions: {
            columns: 1,
            marginX: 60
          }
        },
        {
          name: "group",
          title: "Group 2",
          graphHeight: 200,
          layoutOptions: {
            columns: 1,
            marginX: 60
          }
        }
      ]
    });

    this.stencilContainer.appendChild(stencil.container);

    const r1 = graph.createNode({
      shape: "aaaa",
      attrs: {
        body: {
          rx: 24,
          ry: 24
        },
        text: {
          text: "Input"
        }
      },
      ports: {
        groups: {
          // 输入链接桩群组定义
          in: {
            position: "top",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          },
          // 输出链接桩群组定义
          out: {
            position: "bottom",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          }
        },
        items: [
          { id: "input-up", group: "in" },
          { id: "input-bottom", group: "out" }
        ]
      }
    });
    const r2 = graph.createNode({
      shape: "aaaa",
      attrs: {
        text: {
          text: "Layer 1"
        }
      },
      ports: {
        groups: {
          // 输入链接桩群组定义
          in: {
            position: "top",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          },
          // 输出链接桩群组定义
          out: {
            position: "bottom",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          }
        },
        items: [
          { id: "Layer1-up", group: "in" },
          { id: "Layer1-bottom", group: "out" }
        ]
      }
    });
    const r3 = graph.createNode({
      shape: "aaaa",
      width: 52,
      height: 52,
      // angle: 45,
      attrs: {
        text: {
          text: "Layer 2"
          // transform: "rotate(-45deg)"
        }
      },
      ports: {
        groups: {
          // 输入链接桩群组定义
          in: {
            position: "top",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          },
          // 输出链接桩群组定义
          out: {
            position: "bottom",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          }
        },
        items: [
          { id: "Layer2-up", group: "in" },
          { id: "Layer2-bottom", group: "out" }
        ]
      }
    });
    const r4 = graph.createNode({
      shape: "aaaa",
      width: 70,
      height: 70,
      attrs: {
        body: {
          rx: 35,
          ry: 35
        },
        text: {
          text: "Layer 3"
        }
      },
      ports: {
        groups: {
          // 输入链接桩群组定义
          in: {
            position: "top",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          },
          // 输出链接桩群组定义
          out: {
            position: "bottom",
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: "#31d0c6",
                strokeWidth: 1,
                fill: "#fff"
              }
            }
          }
        },
        items: [
          { id: "Layer3-up", group: "in" },
          { id: "Layer3-bottom", group: "out" }
        ]
      }
    });

    stencil.load([r1, r2], "group1");
    stencil.load([r3, r4], "group");
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  };

  refStencil = (container: HTMLDivElement) => {
    this.stencilContainer = container;
  };




  render() {
    return (
      <div className="main-container">
        <div className="shallow-green section-container">
          <div>
            <h2>Panel</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
              You consider yourself as a
              <select value={this.state.value} onChange={this.handleChange}> 
                <option value="">--Make a choice--</option>
                <option value="beginner">Beginner</option>
                <option value="professional">Professional</option>
              </select>
              </label>
              
            <p>
            Q1
            <select id="q1"> 
              <option value="">--Choose an answer--</option>
              <option value="q1a1">Answer 1</option>
              <option value="q1a2">Answer 2</option>
            </select>
            </p>
            Q2
            <select id="q2"> 
              <option value="">--Choose an answer--</option>
              <option value="q2a1">Answer 1</option>
              <option value="q2a2">Answer 2</option>
            </select>
            <p>
            Q3
            <select id="role"> 
              <option value="">--Choose an answer--</option>
              <option value="q3a1">Answer 1</option>
              <option value="q3a2">Answer 2</option>
            </select>
            </p>
            <input type="submit" value="Submit" />
            </form>
          </div>
          <div>
            <div className="app">
              <div className="app-stencil" ref={this.refStencil} />
              <div className="app-content" ref={this.refContainer} />
            </div>
          </div>
        <div>
          <h2>Modules</h2>
          <h3>Instructions</h3>

          <h3>Templates</h3>
          <button>template 1</button>
          <button>template 2</button>
          <button>template 3</button>
          <button>template 4</button>
          <button>template 5</button>
          <button>template 6</button>
        </div>      
      </div>
    </div>
    );
  }
}
