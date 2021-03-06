import React, { Component } from 'react'
import { render } from 'react-dom'
import { injectGlobal, css } from 'emotion'
import { Canvas, Heading, Paragraph, Box } from '@pndr/demo-utils'
import SegmentedControl from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

class Demo extends Component {

  state = {
    value: 'opt1'
  }

  render() {
    return (
      <Canvas>
        <Heading>
          Default
          </Heading>
        <Box>
          <SegmentedControl
            value={this.state.value}
            options={[{
              id: 'opt1',
              name: 'Option A'
            }, {
              id: 'opt2',
              name: 'Option B'
            }]}
            onChange={({ value }) => {

              this.setState({
                value
              })
            }}
          />
        </Box>
        <Paragraph>
          State
          </Paragraph>
        <Box>
          <pre>
            {JSON.stringify(this.state, null, 2)}
          </pre>
        </Box>
        <Heading>
          On a gray background
          </Heading>
        <Box>
          <div
            className={css`
                background-color: #fbfbfb;
                padding: 20px;
              `}
          >
            <SegmentedControl
              value={this.state.value}
              options={[{
                id: 'opt1',
                name: 'Option A'
              }, {
                id: 'opt2',
                name: 'Option B'
              }]}
              onChange={({ value }) => {

                this.setState({
                  value
                })
              }}
            />
          </div>
        </Box>
      </Canvas>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
