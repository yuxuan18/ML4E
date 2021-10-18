import React from "react";
// import { Graph, Addon, Shape } from "@antv/x6";
import { Graph, Addon} from "@antv/x6";
import { Button } from 'antd'
import "./shape.tsx";
import "@antv/x6-react-shape";
import "./app.css";

const { Stencil } = Addon;
// const { Rect, Circle } = Shape;

export default class Example extends React.Component<any, any> {
  private container: HTMLDivElement;
  private stencilContainer: HTMLDivElement;
  private history: Graph.HistoryManager;
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
      },
      history: true,
      clipboard: {
        enabled: true,
      },
      selecting: {
        enabled: true,
        showNodeSelectionBox: true,
      },
      keyboard: {
        enabled: true,
        global: true,
      },
    });

    // }
    
    this.history = graph.history
    this.history.on('change', () => {
      this.setState({
        canRedo: this.history.canRedo(),
        canUndo: this.history.canUndo(),
      })
    })

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
          title: "Data Pre-Processing",
          graphHeight: 380,
          layoutOptions: {
            columns: 1,
            marginX: 60
          }
        },
        {
          name: "group2",
          title: "Statistical learning",
          graphHeight: 500,
          layoutOptions: {
            columns: 1,
            marginX: 60
          }
        },
        {
          name: "group3",
          title: "Deep learning",
          graphHeight: 480,
          layoutOptions: {
            columns: 1,
            marginX: 60
          }
        },
        {
          name: "group4",
          title: "Results",
          graphHeight: 480,
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
          text: "Data Input"
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
          text: "Normalization"
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
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Logistics Regression"
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
      width: 130,
      height: 50,
      attrs: {
        body: {
          rx: 35,
          ry: 35
        },
        text: {
          text: "Naive Bayes Model"
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
    const r5 = graph.createNode({
      shape: "aaaa",
      width: 100,
      height: 40,
      attrs: {
        body: {
          rx: 35,
          ry: 35
        },
        text: {
          text: "Data Imputation"
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
          { id: "Imputation-up", group: "in" },
          { id: "Imputation-bottom", group: "out" }
        ]
      }
    });
    const r6 = graph.createNode({
      shape: "aaaa",
      width: 100,
      height: 40,
      attrs: {
        body: {
          rx: 35,
          ry: 35
        },
        text: {
          text: "PCA"
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
          { id: "PCA-up", group: "in" },
          { id: "PCA-bottom", group: "out" }
        ]
      }
    });
    const r7 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "SVM"
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
          { id: "SVM-up", group: "in" },
          { id: "SVM-bottom", group: "out" }
        ]
      }
    });
    const r8 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "CART"
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
          { id: "CART-up", group: "in" },
          { id: "CART-bottom", group: "out" }
        ]
      }
    });
    const r9 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Gradient Boosting"
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
          { id: "GBM-up", group: "in" },
          { id: "GBM-bottom", group: "out" }
        ]
      }
    });
    const r10 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Random Forest"
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
          { id: "RF-up", group: "in" },
          { id: "RF-bottom", group: "out" }
        ]
      }
    });
    const r11 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Basic Layer"
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
          { id: "NN-up", group: "in" },
          { id: "NN-bottom", group: "out" }
        ]
      }
    });
    const r12 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "LSTM Layer"
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
          { id: "LSTM-up", group: "in" },
          { id: "LSTM-bottom", group: "out" }
        ]
      }
    });
    const r13 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Transformer Layer"
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
          { id: "TF-up", group: "in" },
          { id: "TF-bottom", group: "out" }
        ]
      }
    });
    const r14 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Sigmoid activation"
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
          { id: "SIG-up", group: "in" },
          { id: "SIG-bottom", group: "out" }
        ]
      }
    });
    const r15 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Relu Activation"
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
          { id: "Relu-up", group: "in" },
          { id: "Relu-bottom", group: "out" }
        ]
      }
    });
    const r16 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Softmax Activation"
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
          { id: "Softmax-up", group: "in" },
          { id: "Softmax-bottom", group: "out" }
        ]
      }
    });
    const r17 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Testset Recall"
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
          { id: "Recall-up", group: "in" },
          { id: "Recall-bottom", group: "out" }
        ]
      }
    });
    const r18 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Testset Accuracy"
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
          { id: "Accuracy-up", group: "in" },
          { id: "Accuracy-bottom", group: "out" }
        ]
      }
    });
    const r19 = graph.createNode({
      shape: "aaaa",
      width: 130,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Testset F1 score"
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
          { id: "F1-up", group: "in" },
          { id: "F1-bottom", group: "out" }
        ]
      }
    });
    const r20 = graph.createNode({
      shape: "aaaa",
      width: 140,
      height: 50,
      // angle: 45,
      attrs: {
        text: {
          text: "Import self-defined metric"
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
          { id: "self-up", group: "in" },
          { id: "self-bottom", group: "out" }
        ]
      }
    });

    stencil.load([r1, r2, r5, r6], "group1");
    stencil.load([r3, r4, r7, r8, r9, r10], "group2");
    stencil.load([r11, r12, r13, r14, r15, r16], "group3");
    stencil.load([r17, r18, r19, r20], "group4");

    graph.bindKey('ctrl+c', () => {
      const cells = graph.getSelectedCells()
      if (cells.length) {
        graph.copy(cells)
      }
      return false
    })

    graph.bindKey('ctrl+v', () => {
      if (!graph.isClipboardEmpty()) {
        const cells = graph.paste({ offset: 32 })
        graph.cleanSelection()
        graph.select(cells)
      }
      return false
    })

    // graph.bindKey(['meta+b', 'ctrl+b'], () => {
    //   const input = graph.addNode({
    //     x: 130,
    //     y: 30,
    //     width: 100,
    //     height: 40,
    //     attrs: {
    //       label: {
    //         text: "Data input",
    //         fill: "#6a6c8a"
    //       },
    //       body: {
    //         stroke: "#31d0c6"
    //       }
    //     }
    //   });

    //   const norm = graph.addNode({
    //     x: 130,
    //     y: 240,
    //     width: 100,
    //     height: 40,
    //     attrs: {
    //       label: {
    //         text: "Normalization",
    //         fill: "#6a6c8a"
    //       },
    //       body: {
    //         stroke: "#31d0c6"
    //       }
    //     }
    //   });

    //   // const imput = graph.addNode({
    //   //   x: 130,
    //   //   y: 340,
    //   //   width: 100,
    //   //   height: 40,
    //   //   attrs: {
    //   //     label: {
    //   //       text: "Data imputation",
    //   //       fill: "#6a6c8a"
    //   //     },
    //   //     body: {
    //   //       stroke: "#31d0c6"
    //   //     }
    //   //   }
    //   // });

    //   graph.addEdge({ input, norm });
    //   // graph.addEdge({ norm, imput });

    //   return false
    // })
  }

  onUndo = () => {
    this.history.undo()
  }

  onRedo = () => {
    this.history.redo()
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
            <div className="app-btns">
              <Button.Group>
                <Button onClick={this.onUndo} disabled={!this.state.canUndo}>
                  Undo
                </Button>
                <Button onClick={this.onRedo} disabled={!this.state.canRedo}>
                  Redo
                </Button>
              </Button.Group>
            </div>
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
