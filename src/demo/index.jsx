var setCursorMixin = require('../setCursorMixin')
;

var { Modal, Navbar, NavbarBrand, PageHeader, Well, Input, Button } = require('react-bootstrap');

require('./index.scss');

var IndexModal = React.createClass({
    displayName: 'IndexModal',
    mixins: [
        setCursorMixin
    ],
    render: function() {
        return (
            <Modal show={this.props.show}
                   onHide={this.props.onHide}
                   animation={true}
                   onEntered={() => { this.setCursor('input', this.props.position) }}>
                <Modal.Header closeButton>
                    <Modal.Title>Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input ref='input' type='text' defaultValue='1234567890' className='form-control' />
                </Modal.Body>
            </Modal>
        );
    }
});

var Index = React.createClass({
    mixins: [
        setCursorMixin
    ],
    displayName: 'Index',
    getInitialState: function() {
        return {
            modal: {
                show: false,
                position: 0
            }
        };
    },
    onModalShow: function(position) {
        this.setState({ modal: {
            show: true,
            position: position
        }});
    },
    onModalHide: function() { console.warn('onModalHide');
        this.setState(this.getInitialState());
    },
    render: function() {
        return (
            <div>
                <Navbar fixedTop={true}>
                    <NavbarBrand>var setCursorMixin = require('react-setcursor');</NavbarBrand>
                </Navbar>
                <PageHeader>Usage</PageHeader>
                <h3>Page onLoad</h3>
                <h5>Set focus when page loaded</h5>
                <Well>
                    <pre className='prettyprint'>
                        { '<input type="text" data-focus />' }
                    </pre>
                </Well>
                <Input type='text' data-focus />

                <hr />

                <h5>Set cursor to end of text when page loaded</h5>
                <Well>
                    <pre className='prettyprint'>
                        {['<input type="text" data-focus="-1" />']}
                    </pre>
                </Well>
                <Button onClick={this.onModalShow.bind(null, -1)}>Show Example</Button>

                <hr />

                <h5>Set cursor to 5 symbol of text when page loaded</h5>
                <Well>
                    <pre className='prettyprint'>
                        {['<input type="text" data-focus="5" />']}
                    </pre>
                </Well>
                <Button onClick={this.onModalShow.bind(null, 5)}>Show Example</Button>

                <h3>Manual</h3>

                <Input type="textarea" wrapperClassName="col-xs-10" />

                <br /><br /><br /><br />

                <IndexModal show={this.state.modal.show}
                    position={this.state.modal.position}
                    onHide={this.onModalHide} />
            </div>
        );
    }
});

ReactDOM.render(<Index />, document.getElementById('body'));
