<template>
  <section>
    <h2>Experience</h2>
    <div v-for="experience in experiences" :key="experience.id" class="experience-item">
      <h3>{{ experience.title }}</h3>
      <p>{{ experience.company }} · {{ experience.type }}</p>
      <p>{{ experience.period }}</p>
      <p>{{ experience.location }}</p>
      <ul>
        <li v-for="task in experience.tasks" :key="task">{{ task }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          id: 1,
          title: 'Cybersecurity Director | CISO',
          company: 'Anadolu Grubu',
          type: 'Full-time',
          period: 'May 2022 to Present · 2 yrs 4 mos',
          location: 'Istanbul, Turkey',
          tasks: [
            'Develop and maintain the organization\'s information security strategy and roadmap',
            'Oversee the implementation of security policies, procedures, and controls',
            'Manage security risks and ensure compliance with industry regulations and standards',
            'Lead incident response efforts and manage crisis situations',
            'Collaborate with other departments to integrate security into all aspects of the organization\'s operations',
            'Keep abreast of the latest security trends and technologies and assess their potential impact on the organization',
            'Ensure that security is embedded into the organization\'s culture and communicated effectively to all employees'
          ]
        },
        {
          id: 2,
          title: 'Cybersecurity Instructor | Founder',
          company: 'Axoss Cybersecurity Academy',
          type: 'Full-time',
          period: 'Nov 2014 to Apr 2022 · 7 yrs 6 mos',
          location: 'Istanbul, Turkey',
          tasks: [
            'Develop and deliver cybersecurity training programs for various audiences including students, employees, and customers',
            'Plan and design effective curriculum and instructional materials, incorporating hands-on activities and real-world scenarios',
            'Keep up-to-date with the latest cybersecurity trends and best practices to ensure the relevance and quality of training content',
            'Utilize a variety of instructional techniques to cater to different learning styles and engage participants',
            'Evaluate student learning and provide constructive feedback to support their growth',
            'Collaborate with other instructors, subject matter experts, and organizations to create effective cybersecurity training programs',
            'Provide guidance and support to students and employees on cybersecurity-related issues'
          ]
        },
        // Other experiences...
      ]
    }
  }
}
</script>

<style scoped>
/* Add styles specific to the Experience component */
</style>
