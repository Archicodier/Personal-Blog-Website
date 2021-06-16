---
title: 'System Design Basics'
date: '2021-06-15'
---

**System design elements:**
- Load Balancing
- Reverse Proxy Server
- Content Delivery Network
- Caching
- Database Sharding/Partitioning

**Load Balancing:**
Load balancing is the process of distributing a set of tasks over a set of recources, with the aim of making their overall processing more efficient.

Different Approches:
- Round robin
- Round robin with weighted servers
- least connections
- least response time
- source ip hash
- url hash

**Reverse Proxy Server:**
A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to appropriate backend server.

**Content Delivery Network:**
A content delivery network is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performace by distributing the service spatially relative to end users.

**Caching:**
A cache is a hardware or software component that stores data so that future requests for that data can be served faster.

**Database Sharding/Partitioning:**
Sharding and partitioning are both about breaking up a large data set into smaller subsets.
