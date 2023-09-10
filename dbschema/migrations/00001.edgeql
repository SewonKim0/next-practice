CREATE MIGRATION m1qxu7ctxln3zt4jrs36hic2hxdis7evnceuncnde6epwgvdabi3yq
    ONTO initial
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY age: std::int32;
      CREATE REQUIRED PROPERTY name: std::str {
          SET default := '';
      };
  };
};
