var React = require('react')
    , setCursorMixin = require('../setCursorMixin')
;

var { Button, Modal, Grid, Col, Row, Nav, NavItem, NavDropdown, MenuItem, Panel, NavBrand, Navbar, CollapsibleNav, ListGroup, ListGroupItem, PageHeader, Well, Input } = require('react-bootstrap');

require('./index.scss');
require("bootstrap-webpack");

var Index = React.createClass({
    mixins: [
        setCursorMixin
    ],
    //propTypes: {},
    //statics: {},
    //displayName: 'Test',

    getInitialState: function() {
        return {};
    },
    //getDefaultProps: function () {},

    //componentWillMount: function () {},
    componentDidMount: (name = 'John', surname = 'Doe') => {console.log(name, surname);},

    //componentWillReceiveProps: function () {},
    //shouldComponentUpdate: function () {},
    //componentWillUpdate: function () {},
    //componentDidUpdate: function () {},

    //componentWillUnmount: function () {},

    //setCursor: function(e) {
    //    console.log(e);
    //},
    render: function() {
        return (
            <div>
                <Navbar fixedTop={true}>
                    <NavBrand>setCursorMixin</NavBrand>
                </Navbar>
                <PageHeader>Usage:</PageHeader>

                <Input type='text' label='onload focus' value='1234567890' data-focus='1' />
                <Well>
                    <pre className='prettyprint'>{[
                        '<input type=\'text\' data-focus />'
                    ]}</pre>
                </Well>

                <Modal show={false} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Input type='text' label='onload focus with position -1' value='1234567890' data-focus />
                        <Well>
                    <pre className='prettyprint'>{[
                        '<input type=\'text\' data-focus />'
                        ]}</pre>
                        </Well>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Input type='text' label='onload focus with position -1' value='1234567890' data-focus='-1' />
                <Well>
                    <pre className='prettyprint'>{[
                        '<input type=\'text\' data-focus=\'-1\' />'
                    ]}</pre>
                </Well>

                <Input type='text' label='onload focus with position 5' value='1234567890' data-focus='-1' />
                <Well>
                    <pre className='prettyprint'>{[
                        '<input type=\'text\' data-focus=\'5\' />'
                        ]}</pre>
                </Well>

                <Row>
                    <Col lg={6}>
                        <div className='input-group'>
                              <span className='input-group-btn'>
                                  <button className='btn btn-default' type='button'>Set!</button>
                              </span>
                            <Input type='text' className='form-control' />
                        </div>
                    </Col>
                </Row>

                <br />

                <Well>
                    <pre className='prettyprint'>{[
                        '<input ref=\'input\' type=\'text\' />\n\n' +
                            '<button onClick={this.setCursor.bind(null, \'input\', -1)}>Set cursor to end of text</button>'
                        ]}</pre>
                </Well>



                <input ref='input1' type='text' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input1', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input2' type='password' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input2', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input3' type='search' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input3', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input4' type='tel' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input4', -1)}>Set cursor to end of text</button>
                <br /><br />
                <input ref='input5' type='url' defaultValue='1234567890' />
                <button onClick={this.setCursor.bind(null, 'input5', -1)}>Set cursor to end of text</button>
                <br /><br />

                <textarea ref='textarea1' defaultValue='afgdgf sdfgsdfgsd sdfgdsfgsdfg sdfgsdfg jhgjg' />

                <button onClick={this.setCursor.bind(null, 'textarea1', 3)}>Set cursor to end of text</button>
            </div>
        );
    }
});

React.render(<Index />, document.getElementById('body'));
