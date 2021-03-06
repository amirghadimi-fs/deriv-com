//TODO: this a temporary way to display these svg
import React from 'react'
import PropTypes from 'prop-types'

const Careers = ({ dynamic_id }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <defs>
            <linearGradient id={`${dynamic_id}1`} x1="0%" x2="100%" y1="78.125%" y2="21.875%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
            <linearGradient id={`${dynamic_id}2`} x1="0%" x2="100%" y1="69.531%" y2="30.469%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
            <linearGradient id={`${dynamic_id}3`} x1="0%" x2="100%" y1="53.719%" y2="46.281%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
            <linearGradient id={`${dynamic_id}4`} x1="0%" x2="100%" y1="58.681%" y2="41.319%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0H18V18H0z" transform="translate(3 3)" />
            <path
                fill={`url(#${dynamic_id}1)`}
                fillRule="nonzero"
                d="M16.714 3H1.286C.576 3 0 3.567 0 4.266v10.968c0 .7.576 1.266 1.286 1.266h15.428c.71 0 1.286-.567 1.286-1.266V4.266C18 3.566 17.424 3 16.714 3zm-15.53.75h15.632c.24 0 .434.192.434.429V15.32c0 .237-.194.429-.434.429H1.184c-.24 0-.434-.192-.434-.429V4.18c0-.237.194-.429.434-.429z"
                transform="translate(3 3)"
            />
            <path
                fill={`url(#${dynamic_id}2)`}
                fillRule="nonzero"
                d="M11.143 8.25H6.857c-.473 0-.857.42-.857.938v1.874c0 .518.384.938.857.938h4.286c.473 0 .857-.42.857-.938V9.188c0-.518-.384-.938-.857-.938zM6.75 9h4.5v2.25h-4.5V9z"
                transform="translate(3 3)"
            />
            <path
                fill={`url(#${dynamic_id}3)`}
                fillRule="nonzero"
                d="M12.125.75c.715 0 1.302.535 1.369 1.22l.006.13V3h-.917v-.9c0-.22-.162-.405-.376-.443l-.082-.007h-5.5c-.225 0-.412.16-.45.37l-.008.08V3H5.25v-.9c0-.702.545-1.278 1.243-1.344L6.625.75h5.5z"
                transform="translate(3 3)"
            />
            <path
                fill={`url(#${dynamic_id}4)`}
                fillRule="nonzero"
                d="M16.714 3C17.568 3 18 3.63 18 4.667c0 .82-.568 2.346-1.708 4.652-.335.677-1.016 1.123-1.778 1.176l-.154.005h-2.789v-.833h2.79c.494 0 .944-.276 1.158-.709 1.081-2.187 1.624-3.643 1.624-4.291 0-.586-.12-.802-.369-.83l-.06-.004H1.286c-.269 0-.408.175-.427.705l-.001.055 1.69 4.272c.177.446.597.752 1.08.796l.12.006h2.68v.833h-2.68c-.834 0-1.587-.47-1.938-1.196l-.061-.14-1.72-4.348L0 4.666c0-.984.39-1.602 1.16-1.661L1.287 3h15.428z"
                transform="translate(3 3)"
            />
        </g>
    </svg>
)

Careers.propTypes = {
    dynamic_id: PropTypes.string,
}
export default Careers
