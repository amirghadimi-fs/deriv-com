import { job_types } from '../_job_types/_job_types'
import { cyberjaya, dubai } from '../_locations/_locations'
import { localize } from 'components/localization'

export const devops_positions = [
    {
        title: localize('DevOps Engineer'),
        id: '73196e24-1791-4d6e-acd5-8dad46527c34',
        keywords: [localize('DevOps Engineer')],
        location: cyberjaya.name,
        type: [job_types.full_time],
        team: 'devops',
        description: [
            localize(
                'You will be deeply involved in every stage of the software lifecycle. You will work closely with developers and testers to facilitate the smooth execution of the continuous integration (CI) process. You must be passionate about connecting software development to day-to-day operations and improving the quality of our products and services.\n',
            ),
        ],
        responsibilities: [
            localize(
                'Maintain and extend our service monitoring. We use tools such as Datadog to detect and react to issues. We’ll need you to be proactive and find issues before they happen.',
            ),
            localize(
                'Keep things running. Systems do break from time to time. When they break, your job will be to make it work again. Once it works, walk the developers through the failure so they can prevent it from breaking again.',
            ),
            localize(
                'Keep our systems secure. We have a dedicated security team, but you’ll also need to be ready to fight off intrusions.',
            ),
            localize('Defeat any attempts at breaking into our systems.'),
            localize(
                'Help us improve continuously. If you have suggestions for making things better, we’d love to hear about it.',
            ),
        ],
        qualifications: [
            localize(
                'Expertise in cloud solutions and virtualization infrastructure, including AWS, Google Cloud Platform, and KVM',
            ),
            localize(
                'Familiarity with Linux and open-source applications such as rsyslog, DHCP, iptables, Postfix, NGINX, and initialization systems such as systemd and SysVinit',
            ),
            localize('Extensive experience in TCP/IP networking, firewalls, and VPNs'),
            localize(
                'Knowledge of hardware and software firewalls, intrusion detection methods, security systems, and DDoS protection',
            ),
            localize('Thorough knowledge of bash scripting'),
            localize(
                'Knowledge of Chef, Ansible, SaltStack, or similar configuration management tools',
            ),
            localize('Experience in Site reliability engineering (SRE)'),
            localize(
                'Experience in managing round-the-clock operations for incident resolution, including alerts, rotations, and escalations',
            ),
            localize(
                'Experience in designing and working with high-availability web service architecture',
            ),
            localize('Experience in application containerization (preferably Docker)'),
            localize('Experience in database administration (preferably PostgresSQL)'),
        ],
        preferences: [
            localize('Extensive knowledge of information security and data protection'),
            localize('Experience with Terraform and Kubernetes'),
            localize('Familiarity with Perl, Python, and other scripting languages'),
            localize('Knowledge of industry-accepted IS standards'),
            localize(
                'Experience in hardening Linux systems; CI tools such as Travis-CI, CircleCI, Jenkins etc.; documentation of processes and incidents; version control software (Git); and Windows Server Administration (IIS, MS-SQL)',
            ),
        ],
    },
    {
        title: localize('DevOps Engineer'),
        id: 'c59a9e9d-656d-40c8-bfda-7e015d9aa62c',
        keywords: [localize('DevOps Engineer')],
        location: dubai.name,
        type: [job_types.full_time],
        team: 'devops',
        description: [
            localize(
                'You will be deeply involved in every stage of the software lifecycle. You will work closely with developers and testers to facilitate the smooth execution of the continuous integration (CI) process. You must be passionate about connecting software development to day-to-day operations and improving the quality of our products and services.\n',
            ),
        ],
        responsibilities: [
            "Maintain and extend our service monitoring. We use tools such as Datadog to detect and react to issues. We'll need you to be proactive and find issues before they happen. translate",
            localize(
                'Keep things running. Systems do break from time to time. When they break, your job will be to make it work again. Once it works, walk the developers through the failure so they can prevent it from breaking again.',
            ),
            "Keep our systems secure. We have a dedicated security team, but you'll also need to be ready to fight off intrusions. Defeat any attempts at breaking into our systems. translate",
            "Help us improve continuously. If you have suggestions for making things better, we'd love to hear about it.",
        ],
        qualifications: [
            localize(
                'Expertise in cloud solutions and virtualization infrastructure, including AWS, Google Cloud Platform, and KVM',
            ),
            localize(
                'Familiarity with Linux and open-source applications such as rsyslog, DHCP, iptables, Postfix, NGINX, and initialization systems such as systemd and SysVinit',
            ),
            localize('Extensive experience in TCP/IP networking, firewalls, and VPNs'),
            localize(
                'Knowledge of hardware and software firewalls, intrusion detection methods, security systems, and DDoS protection',
            ),
            localize('Thorough knowledge of bash scripting'),
            localize(
                'Knowledge of Chef, Ansible, SaltStack, or similar configuration management tools',
            ),
            localize(
                'Experience in Site Reliability Engineering (SRE); managing round-the-clock operations for incident resolution, including alerts,  rotations, and escalations; designing and working with high-availability web service architecture; application containerization (preferably Docker); and database administration (preferably PostgreSQL)',
            ),
        ],
        preferences: [
            localize('Extensive knowledge of information security and data protection'),
            localize('Experience with Terraform and Kubernetes'),
            localize('Familiarity with Perl, Python, and other scripting languages'),
            localize('Knowledge of industry-accepted IS standards'),
            localize(
                'Experience in hardening Linux systems; CI tools such as Travis-CI, CircleCI, Jenkins etc.; documentation of processes and incidents; version control software (Git); and Windows Server Administration (IIS, MS-SQL)',
            ),
        ],
    },
]
