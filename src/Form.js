import React, { useState } from 'react'
import { Button, Card, CardBody, Col, Container, Input, Label, Row } from 'reactstrap'

export default function Eley() {
    const _form = {
        tittle: "",
        thematic_area: "",
        level: "",
        date: "",
        language: "",
        type: "",
        link: "",
    }

    const [form, setForm] = useState(_form)
    const [data, setData] = useState([])

    const handleChange = ({ target: { name, value } }) =>
        setForm((p) => ({ ...p, [name]: value }));

    const handleAdd = () => {
        setForm(_form)
        console.log(form)
    }
    return (
        <div>
            <Container className='mt-3'>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <Label>Tittle</Label>
                                <Input type='text' name='tittle'
                                    value={form.tittle}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Thematic Area    </Label>
                                <Input type='text' name='thematic_area'
                                    value={form.thematic_area}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Level</Label>
                                <Input type='select' name='level'
                                    value={form.level}
                                    onChange={handleChange}>
                                    <option>---select---</option>
                                    <option>Introductry</option>
                                    <option>Cuttermendiate</option>
                                    <option>Addvance</option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Label>Date</Label>
                                <Input type='date' name='date'
                                    value={form.date}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Language</Label>
                                <Input type='text' name='language'
                                    value={form.language}
                                    onChange={handleChange} />
                            </Col>
                            <Col md={6}>
                                <Label>Type</Label>
                                <Input type='select' name='type'
                                    value={form.type}
                                    onChange={handleChange}>
                                    <option>---select---</option>
                                    <option>Inperson</option>
                                    <option>Online</option>
                                </Input>
                            </Col>
                            <Col md={6}>
                                <Label>Link</Label>
                                <Input type='text' name='link'
                                    value={form.link}
                                    onChange={handleChange} />
                            </Col>
                        </Row>
                        <center><Button className='mt-3' onClick={handleAdd}>Submit</Button></center>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}