import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device.js'
import { Header, Text } from 'components/elements'
import Graph from 'images/svg/graph.svg'

const Wrapper = styled.section`
    padding-top: 8rem;
    width: 100%;
    height: inherit;
    justify-content: center;
    display: flex;
    flex-direction: row;
    background-color: rgba(200, 214, 215, 0.22);
`
const Content = styled.div`
    width: 40.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-right: 5.6rem;
    margin-top: 9.4rem;

    @media ${device.tablet} {
        display: none;
    }
`
const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 2.4rem;

    p {
        margin-left: 1.6rem;
        width: 84%;
    }
    :last-child {
        margin-bottom: 0;
    }
`

const StyledText = styled(Text)`
    font-size: var(--text-size-xs);
    margin-top: 2.4rem;
    opacity: 0.56;
`

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--color-red);
    margin-top: 2.4rem;
`

const NewSignup = () => {
    const [submitState, setSubmitState] = useState('')

    function getSubmitState(submitStatus) {
        setSubmitState(submitStatus)
    }
    return (
        <Layout is_static padding_top="0">
            <SEO
                description={localize(
                    'Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities.',
                )}
                title={localize('Easy And Free Sign Up | Online Trading')}
            />
            <Wrapper>
                {!(submitState === 'success' || submitState === 'error') && (
                    <Content>
                        <Graph />
                        <Header margin="2.4rem 0 0 0" font_size="3.6rem">{localize('Start trading with Deriv')}</Header>
                        <br />
                        <Text>
                            {localize(
                                'Join over 1 million people who trade with Deriv and Binary.com — the award-winning platform that’s been trusted for 20 years.',
                            )}
                        </Text>
                        <Line />

                        <StyledText color="grey-12">
                            {localize(
                                'By giving us your email address, you agree to receive marketing emails from us. You may unsubscribe from these emails at any time.',
                            )}
                        </StyledText>
                    </Content>
                )}

                <Signup
                    appearance={Appearances.newSignup}
                    bgColor="grey-14"
                    onSubmit={getSubmitState}
                    autofocus={true}
                />
            </Wrapper>
        </Layout>
    )
}

NewSignup.propTypes = {
    autofocus: PropTypes.bool,
    closeModal: PropTypes.func,
}

export default WithIntl()(NewSignup)
