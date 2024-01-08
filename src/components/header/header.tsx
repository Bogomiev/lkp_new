'use client'

import Image from 'next/image'
import { Col, Layout, Row } from 'antd'
import styles from './header.module.css'

const { Header } = Layout

const MainHeader = () => {
    return (
        <Header className={styles.header}>
            <Row>
                <Col flex={50}>
                    <div className="logo" style={{ margin: '10px' }}>
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={151}
                            height={35}
                        />
                    </div>
                </Col>
                <Col flex={'none'} style={{ margin: '7px -30px' }}>
                    <Row>
                        <Col flex={'none'}>
                            <div className={styles.title}>
                                Горячая линия для поставщиков
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex={'none'}>
                            <div className={styles.phone}>8 800 250 26 84</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}

export default MainHeader
