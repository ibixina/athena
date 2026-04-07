(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const R="duplicate-subsets",z="Duplicate Subset Sums",U="Medium",H="45-90 minutes",L="You are given 10 distinct positive integers, each at most 100. Prove that there exist two **different non-empty subsets** of these integers that have the **same sum**.",G="2026-04-06",N=[{name:"Subsets and Combinations",description:"Understanding how many ways we can form groups from a larger set.",resourceTitle:"Combinatorics: Subsets",resourceUrl:"https://en.wikipedia.org/wiki/Subset",readTime:"3 min"},{name:"The Pigeonhole Principle",description:"If you have more pigeons than holes, at least one hole must contain more than one pigeon.",resourceTitle:"Introduction to Pigeonhole Principle",resourceUrl:"https://artofproblemsolving.com/wiki/index.php/Pigeonhole_Principle",readTime:"5 min"}],F=[{order:1,content:"How many non-empty subsets are there for a set of 10 elements?"},{order:2,content:"What is the smallest possible sum a subset could have? What is the largest possible sum, knowing each integer is at most 100?"},{order:3,content:"Compare the number of possible non-empty subsets to the number of distinct possible sums. Apply the Pigeonhole Principle."}],Y=`### Step 1: Count the Subsets
A set of 10 distinct elements has [$2^{10} = 1024$ subsets](https://en.wikipedia.org/wiki/Power_set) in total. Excluding the empty set, there are **1023 non-empty subsets**.

### Step 2: Determine the Range of Possible Sums
The minimum possible sum is 1, assuming 1 is in the subset.
The maximum possible sum occurs if the set consists of the 10 largest possible integers (91, 92, ..., 100). That sum is $91 + 92 + \\dots + 100 = 955$.

Thus, any subset sum must be an integer between 1 and 955 inclusive.

### Step 3: Apply the Pigeonhole Principle
We have 1023 different non-empty subsets (the 'pigeons'), but only 955 possible sum values (the 'holes'). Since $1023 > 955$, by the [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_Principle), at least two different non-empty subsets must map to the same sum. $\\blacksquare$`,ro={id:R,title:z,difficulty:U,estimatedTime:H,statement:L,publishDate:G,concepts:N,hints:F,solution:Y},lo=Object.freeze(Object.defineProperty({__proto__:null,concepts:N,default:ro,difficulty:U,estimatedTime:H,hints:F,id:R,publishDate:G,solution:Y,statement:L,title:z},Symbol.toStringTag,{value:"Module"})),J="blue-eyed-islanders",X="The Blue-Eyed Islanders",K="Hard",V="60-120 minutes",Q="A group of 100 people live on an island. They all have blue eyes, but nobody knows their own eye color. They are forbidden to communicate about eye color. There are no mirrors. If a person figures out they have blue eyes, they must leave the island on the ferry that night at midnight. One day, a guru visits the island and announces universally: 'I see someone with blue eyes.' Assuming all islanders are perfectly logical, what happens?",Z="2026-04-07",ee=[{name:"Common Knowledge",description:"Information that is known by everyone, and everyone knows that everyone knows it, ad infinitum.",resourceTitle:"Common Knowledge (Logic)",resourceUrl:"https://en.wikipedia.org/wiki/Common_knowledge_(logic)",readTime:"10 min"},{name:"Mathematical Induction",description:"A method of mathematical proof typically used to establish a given statement for all natural numbers.",resourceTitle:"Mathematical Induction",resourceUrl:"https://en.wikipedia.org/wiki/Mathematical_induction",readTime:"8 min"}],te=[{order:1,content:"What happens if there is exactly 1 person with blue eyes on the island?"},{order:2,content:"If there are exactly 2 people with blue eyes, what do they observe on the first day? What do they conclude on the second day when no one leaves?"},{order:3,content:"Generalize the pattern using mathematical induction for 'k' people with blue eyes."}],ne=`### Step 1: Common Knowledge and the Guru's Statement
Before the guru speaks, every islander can see 99 people with blue eyes, so everyone already knows that someone has blue eyes. However, the guru's statement establishes **[Common Knowledge](https://en.wikipedia.org/wiki/Common_knowledge_(logic))**. The fact 'at least one person has blue eyes' becomes information that everyone knows, everyone knows that everyone else knows it, and everyone knows that everyone knows that everyone knows, ad infinitum. This shared baseline allows them to mathematically reason about other islanders' reasoning.

### Step 2: Base Case (k = 1)
Assume hypothetically that there is only $k = 1$ blue-eyed person on the island.
- That single blue-eyed person would look around and see exactly 0 other people with blue eyes, meaning the remaining 99 islanders have non-blue eyes.
- The guru's statement establishes that at least one person has blue eyes.
- Since the single blue-eyed person sees no one else with blue eyes, they logically deduce that their own eyes must be blue to satisfy the guru's statement.
- Therefore, if $k = 1$, the single blue-eyed person leaves on Night 1.

### Step 3: Inductive Step (k = 2)
Assume hypothetically that there are exactly $k = 2$ blue-eyed people (let's call them A and B).
- Person A looks around and sees exactly 1 blue-eyed person (Person B) and 98 non-blue-eyed people.
- Person A reasons logically: 'If I do not have blue eyes, then Person B is the *only* blue-eyed person on the island. If that is true, Person B will see 0 blue-eyed people and, according to the $k=1$ base case reasoning, Person B will figure out their eye color and leave on Night 1.'
- Neither person can communicate, so A must wait to see what B does.
- On Night 1, nobody leaves the island (since B also sees A and is waiting for A to leave).
- On Day 2, Person A realizes: 'Person B did not leave. Therefore, my assumption that Person B is the only blue-eyed person must be false. Since the only other option is that my own eyes are also blue, I must have blue eyes.'
- Because Person B goes through the exact same perfectly logical reasoning symmetrically, both A and B deduce their eye color on Day 2.
- Thus, if $k = 2$, both blue-eyed people leave together on Night 2.

### Step 4: Generalization using Mathematical Induction
We can generalize this using **[Mathematical Induction](https://en.wikipedia.org/wiki/Mathematical_induction)**. Let our premise be that if there are exactly $k$ blue-eyed people, they will all leave precisely on the $k$-th night.
- We have shown this holds for $k=1$ and $k=2$.
- Assume this premise holds for some arbitrary number $m$. That is, if there are exactly $m$ blue-eyed people, they leave on the $m$-th night.
- Now consider the hypothetical case where there are $m+1$ blue-eyed people. Each blue-eyed person sees exactly $m$ other blue-eyed people.
- Each of them reasons: 'If my eyes are not blue, then there are exactly $m$ blue-eyed people. If there are exactly $m$ blue-eyed people, they will all leave on the $m$-th night.'
- Each person waits to see what happens on the $m$-th night. When nobody leaves on the $m$-th night, their hypothesis that there are only $m$ blue-eyed people is conclusively proven false.
- Since they see $m$ blue-eyed people and the true total is therefore strictly greater than $m$, the true total must be $m+1$. The only way for the total to be $m+1$ is if they themselves have blue eyes.
- They finalize this deduction on the morning of day $m+1$, and thus all $m+1$ people leave simultaneously on the $(m+1)$-th night.
- This creates a chain of perfectly logical reasoning proving the premise holds for any $k \\ge 1$.

### Conclusion
We apply the generalized rule to the actual situation. Since every single one of the 100 islanders has blue eyes, the true value of $k$ is 100.
1. Each islander sees 99 blue-eyed people.
2. Therefore, each islander waits exactly 99 nights, expecting the others to leave on the 99th night if they themselves do not have blue eyes.
3. When nobody leaves on the 99th night, it becomes fully proven to every islander that their own eyes must be blue.
4. Consequently, on the 100th midnight, all 100 perfectly logical islanders will board the ferry and leave the island simultaneously. $\\blacksquare$`,ho={id:J,title:X,difficulty:K,estimatedTime:V,statement:Q,publishDate:Z,concepts:ee,hints:te,solution:ne},co=Object.freeze(Object.defineProperty({__proto__:null,concepts:ee,default:ho,difficulty:K,estimatedTime:V,hints:te,id:J,publishDate:Z,solution:ne,statement:Q,title:X},Symbol.toStringTag,{value:"Module"})),ie="100-prisoners-boxes",oe="100 Prisoners and 100 Boxes",se="Hard",ae="90-120 minutes",re="There are 100 prisoners numbered 1 to 100. The warden places their numbers randomly in 100 boxes in a room, one number per box. Each prisoner enters the room, opens up to 50 boxes, looks inside, and then leaves. They cannot communicate afterward. If *every* prisoner finds their own number, all are freed. If even one fails, all are executed. Is there a strategy that yields a better than $(1/2)^{100}$ survival rate?",le="2026-04-08",he=[{name:"Permutations and Cyles",description:"Understanding how random arrangements can form disjoint cycles.",resourceTitle:"Permutation Cycles",resourceUrl:"https://en.wikipedia.org/wiki/Permutation#Cycle_notation",readTime:"15 min"}],ce=[{order:1,content:"If prisoners just choose 50 boxes randomly, the probability of everyone succeeding is indeed extremely small."},{order:2,content:"View the boxes and their contents as a random permutation of the numbers 1 to 100."},{order:3,content:"What if prisoner $k$ opens box $k$, and then opens the box corresponding to the number found inside?"}],de=`### Step 1: The Strategy
Prisoner $k$ opens box $k$. They look at the number inside, say $n_1$. They then open box $n_1$, read the number $n_2$, and so forth. They continue tracing this path until they either find their own number $k$ or open 50 boxes.

### Step 2: Why it Works
The boxes form a [random permutation](https://en.wikipedia.org/wiki/Random_permutation) of 1 to 100. Every permutation decomposes into [disjoint cycles](https://en.wikipedia.org/wiki/Permutation#Cycle_notation). By starting at box $k$, the prisoner is tracing the cycle containing their own number $k$.
They will definitely find their number if and only if the cycle containing $k$ has a length of at most 50.

### Step 3: Probabilistic Analysis
The prisoners all succeed if the entire permutation contains NO cycle of length greater than 50. What is the probability of a random permutation of 100 elements having no cycle longer than 50?
The probability of a cycle of length $k$ existing (for $k > 50$) is $1/k$. By summing over all such lengths, the failure probability is $\\\\sum_{k=51}^{100} \\\\frac{1}{k}$, which is a partial sum of the [Harmonic Series](https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)). This evaluates to approximately $\\\\ln(2) \\\\approx 0.6931$.
The survival probability is therefore $1 - \\\\ln(2) \\\\approx 0.3069$.

Thus, this strategy gives them an astonishing ~31% chance of survival!`,uo={id:ie,title:oe,difficulty:se,estimatedTime:ae,statement:re,publishDate:le,concepts:he,hints:ce,solution:de},mo=Object.freeze(Object.defineProperty({__proto__:null,concepts:he,default:uo,difficulty:se,estimatedTime:ae,hints:ce,id:ie,publishDate:le,solution:de,statement:re,title:oe},Symbol.toStringTag,{value:"Module"})),ue="poisoned-wine",me="The Poisoned Wine",pe="Medium",fe="30-60 minutes",ge="A king has 1000 bottles of wine. One bottle is poisoned. The poison is deadly even in the smallest drops, and takes exactly 24 hours to kill. The king has 10 rats and wants to identify the poisoned bottle in exactly 24 hours. How can he arrange the tasting?",ye="2026-04-09",be=[{name:"Binary Representation",description:"Representing numbers in base-2 system.",resourceTitle:"Binary Number System",resourceUrl:"https://en.wikipedia.org/wiki/Binary_number",readTime:"5 min"}],$e=[{order:1,content:"We only have 24 hours, so all testing must be done simultaneously in a single round."},{order:2,content:"Each rat has two possible states after 24 hours: dead or alive."},{order:3,content:"Since there are 10 rats, how many different combinations of dead/alive rats can there be? Note that $2^{10} = 1024$."}],we=`### Step 1: Label the Bottles
Number the bottles from 1 to 1000. Express each bottle's number in [binary](https://en.wikipedia.org/wiki/Binary_number). Since $2^{10} = 1024 > 1000$, we need at most 10 bits to represent any bottle number.

### Step 2: Assign the Rats
Label the 10 rats with the [place values](https://en.wikipedia.org/wiki/Positional_notation) of the bits: Rat 1 represents the 1st bit ($2^0$), Rat 2 represents the 2nd bit ($2^1$), ..., Rat 10 represents the 10th bit ($2^9$).
Rat $i$ drinks a tiny drop from bottle $j$ if and only if the $i$-th bit of the binary representation of $j$ is a 1.

### Step 3: Decode the Results
Wait 24 hours. Observe which rats die. The dead rats correspond to the bits that are a 1 in the binary representation of the poisoned bottle. By converting this binary sequence back to decimal, the king will know exactly which bottle is poisoned.`,po={id:ue,title:me,difficulty:pe,estimatedTime:fe,statement:ge,publishDate:ye,concepts:be,hints:$e,solution:we},fo=Object.freeze(Object.defineProperty({__proto__:null,concepts:be,default:po,difficulty:pe,estimatedTime:fe,hints:$e,id:ue,publishDate:ye,solution:we,statement:ge,title:me},Symbol.toStringTag,{value:"Module"})),ve="25-horses",ke="The 25 Horses",Te="Medium",_e="60-90 minutes",Se="You have 25 horses. You want to find the top 3 fastest horses. You have a racetrack that can race at most 5 horses at a time. The track doesn't record times, only the relative finishing order of the horses in each race. What is the minimum number of races needed to confidently find the top 3 horses?",xe="2026-04-10",Ae=[{name:"Sorting Networks and Partial Orders",description:"Finding minimal comparators to sort or select elements.",resourceTitle:"Sorting Networks",resourceUrl:"https://en.wikipedia.org/wiki/Sorting_network",readTime:"12 min"}],Pe=[{order:1,content:"Clearly, you must race all horses at least once. Start by dividing them into 5 groups of 5."},{order:2,content:"After racing the 5 groups, take the 5 winners from each group and race them. What does this reveal?"},{order:3,content:"Can you eliminate any horses from consideration based on the results of these first 6 races?"}],Be=`### Step 1: Initial Group Races
Divide the 25 horses into 5 groups of 5 and race them. This requires **5 races**.

### Step 2: Race of Winners
Take the 5 winners from each group and race them against each other (**1 race**). 
The winner of this race is the overall #1 horse. This is effectively a [tournament](https://en.wikipedia.org/wiki/Tournament_(graph_theory)) structure.
Let's name the groups $A$ to $E$ based on how their winners placed in this race ($A_1 > B_1 > C_1 > D_1 > E_1$).

### Step 3: Elimination
Since we only need the top 3 overall, we can brutally eliminate using a [partial order](https://en.wikipedia.org/wiki/Partially_ordered_set) argument:
- Entire groups $D$ and $E$.
- $C_2, C_3, C_4, C_5$ (At best, $C_1$ could be 3rd overall. Its subordinates are 4th or worse).
- $B_3, B_4, B_5$ (At best, $B_1$ is 2nd, and $B_2$ is 3rd).
- $A_4, A_5$ (Since $A_1, A_2, A_3$ are strictly faster).

### Step 4: The Final Race
Who is left to fight for 2nd and 3rd place? 
The candidates are: $A_2, A_3$ (from the fastest group), $B_1, B_2$ (from the second group), and $C_1$ (from the third group). 
This is exactly 5 horses! Race them (**1 race**). The top 2 finishers in this race are the overall 2nd and 3rd fastest horses.

Total races: 5 + 1 + 1 = **7 races**.`,go={id:ve,title:ke,difficulty:Te,estimatedTime:_e,statement:Se,publishDate:xe,concepts:Ae,hints:Pe,solution:Be},yo=Object.freeze(Object.defineProperty({__proto__:null,concepts:Ae,default:go,difficulty:Te,estimatedTime:_e,hints:Pe,id:ve,publishDate:xe,solution:Be,statement:Se,title:ke},Symbol.toStringTag,{value:"Module"})),Ce="three-gods",De="The Three Gods",Ie="Extreme",je="120-180 minutes",Ee="Three gods A, B, and C are called, in no particular order, True, False, and Random. True always speaks truly, False always speaks falsely, but whether Random speaks truly or falsely is a completely random coin flip. You must determine the identities of A, B, and C by asking three yes-no questions; each question must be put to exactly one god. The gods understand English, but will answer all questions in their own language, in which the words for yes and no are 'da' and 'ja', in some order. You do not know which word means which.",Oe="2026-04-11",We=[{name:"Boolean Logic",description:"Algebraic structure capturing logical operations.",resourceTitle:"Boolean Algebra",resourceUrl:"https://en.wikipedia.org/wiki/Boolean_algebra",readTime:"10 min"},{name:"Self-reference",description:"Statements that refer to themselves.",resourceTitle:"Self-reference",resourceUrl:"https://en.wikipedia.org/wiki/Self-reference",readTime:"10 min"}],Me=[{order:1,content:"You need to bypass the language barrier. Can you construct a question so that 'da' always implies the truth of a statement, regardless of what 'da' actually translates to?"},{order:2,content:"Try embedding a hypothetical about the god's own behavior. E.g., 'If I asked you Q, would you say 'ja'?'"},{order:3,content:"Your first overarching goal must be to find a god you are CERTAIN is not Random."}],qe=`### Step 1: The Magic Lemma
Let $Q$ be a yes/no statement. Ask any non-Random god: 'If I asked you $Q$, would you answer "ja"?'
By rigorous [truth table](https://en.wikipedia.org/wiki/Truth_table) analysis (considering if the god is True/False, and if 'ja' means yes/no), the god's answer will universally be 'ja' if $Q$ is true, and 'da' if $Q$ is false. This [self-referential](https://en.wikipedia.org/wiki/Self-reference) question structure perfectly decodes the language and the truth-teller/liar property.

### Step 2: Question 1
Ask God B: 'If I asked you "Is God A Random?", would you answer "ja"?'
- If B answers 'ja', then A is Random (if B is True/False), OR B is Random. In either case, C is NOT Random.
- If B answers 'da', then A is not Random (if B is True/False), OR B is Random. In either case, A is NOT Random.
Let's say the answer points to God X being NOT Random.

### Step 3: Question 2
Ask God X (who is definitely True or False): 'If I asked you "Are you True?", would you answer "ja"?'
- If X answers 'ja', X is True.
- If X answers 'da', X is False.

### Step 4: Question 3
Ask God X: 'If I asked you "Is God A Random?", would you answer "ja"?'
- The answer directly evaluates if A is Random (since X is reliable). 
- By [elimination](https://en.wikipedia.org/wiki/Proof_by_exhaustion), you can then deduce the identity of the third god.`,bo={id:Ce,title:De,difficulty:Ie,estimatedTime:je,statement:Ee,publishDate:Oe,concepts:We,hints:Me,solution:qe},$o=Object.freeze(Object.defineProperty({__proto__:null,concepts:We,default:bo,difficulty:Ie,estimatedTime:je,hints:Me,id:Ce,publishDate:Oe,solution:qe,statement:Ee,title:De},Symbol.toStringTag,{value:"Module"})),Re="ants-on-a-stick",ze="Ants on a Stick",Ue="Medium",He="30-60 minutes",Le="100 ants are walking on a meter stick (100 cm). Each ant travels at a constant speed of 1 cm per second. They start at various positions and arbitrary directions. When two ants collide, they instantly reverse direction and continue at the same speed. If an ant reaches either end of the stick, it falls off. What is the maximum possible time before all ants have fallen off the stick, from any starting configuration?",Ge="2026-04-12",Ne=[{name:"Invariants and Symmetry",description:"Properties of a system that remain unchanged under some transformations.",resourceTitle:"Invariant",resourceUrl:"https://en.wikipedia.org/wiki/Invariant_(mathematics)",readTime:"10 min"}],Fe=[{order:1,content:"What actually happens to the global system of ants during a collision?"},{order:2,content:"Since the ants are identical, does it matter which ant is which?"},{order:3,content:"Imagine the ants simply pass through each other instead of bouncing. How does this change the macro-state?"}],Ye=`### Step 1: The Insight
When two ants collide, they bounce and reverse directions. However, because all ants travel at exactly the same speed and are otherwise identical, the collision is functionally identical to them simply **passing through each other**.
This is because the system has an [invariant](https://en.wikipedia.org/wiki/Invariant_(mathematics)): the set of all ant positions over time is unchanged whether ants bounce or pass through. If we ignore the identities of the ants, the macro-state is exactly the same.

### Step 2: Pass-Through Analysis
If we assume they pass through each other, each 'virtual' ant just walks continuously at 1 cm/s in its original direction until it falls off the end. This transforms the problem from complex multi-body collisions into [independent particle](https://en.wikipedia.org/wiki/Particle_system) trajectories.

### Step 3: Finding the Maximum Time
The maximum time an ant can stay on the stick without changing direction is determined by the length of the stick. If an ant starts at one edge (e.g., 0 cm) and walks towards the other edge (100 cm), it will take exactly 100 seconds to fall off.
Since 'bouncing' is macroscopically identical to 'passing through', the maximum possible time before the stick is empty is **100 seconds**.`,wo={id:Re,title:ze,difficulty:Ue,estimatedTime:He,statement:Le,publishDate:Ge,concepts:Ne,hints:Fe,solution:Ye},vo=Object.freeze(Object.defineProperty({__proto__:null,concepts:Ne,default:wo,difficulty:Ue,estimatedTime:He,hints:Fe,id:Re,publishDate:Ge,solution:Ye,statement:Le,title:ze},Symbol.toStringTag,{value:"Module"})),Je="12-coin-problem",Xe="12 Coins and a Balance",Ke="Hard",Ve="60-120 minutes",Qe="You have 12 seemingly identical coins. 11 of them have exactly the same weight, but one is fake and is either strictly lighter or strictly heavier than the others. You have a balance scale. What is the minimum number of weighings needed to guarantee finding the fake coin and determining whether it is heavier or lighter?",Ze="2026-04-13",et=[{name:"Information Theory",description:"Quantifying the amount of information in outcomes.",resourceTitle:"Information Theory",resourceUrl:"https://en.wikipedia.org/wiki/Information_theory",readTime:"15 min"},{name:"Decision Trees",description:"Hierarchical models of decision pathways.",resourceTitle:"Decision Tree",resourceUrl:"https://en.wikipedia.org/wiki/Decision_tree",readTime:"8 min"}],tt=[{order:1,content:"Each weighing has 3 possible outcomes: Left heavy, Right heavy, or Balanced."},{order:2,content:"There are 24 possible scenarios (12 coins * 2 states: heavy/light). With 3 weighings, you have $3^3 = 27$ branches, so 3 is theoretically possible."},{order:3,content:"Start by dividing the 12 coins into 3 groups of 4."}],nt=`### Overview
It can be done in exactly **3 weighings**. This is optimal because each weighing has 3 outcomes (left heavy, balanced, right heavy), giving $3^3 = 27$ branches in a [decision tree](https://en.wikipedia.org/wiki/Decision_tree), which is just enough to cover all 24 possible scenarios (12 coins x 2 states). Divide coins into A, B, and C (4 coins each).

### Step 1: Weigh A against B
**Case 1: They balance.** The fake is in C. A and B are all real.
- **Weigh 2**: Weigh 3 coins from C against 3 known real coins.
  - If they balance, the 4th coin in C is fake. **Weigh 3** against a real coin to check if it's heavy/light.
  - If they tilt, you know if the fake is heavy or light, and it's isolated to 3 coins. **Weigh 3**: Weigh 1 suspect vs 1 suspect.

**Case 2: They do not balance.** Assume A is heavier (symmetric logic for B heavier). The fake is either heavy in A, or light in B. C is all real.
- **Weigh 2**: Weigh (3 from A + 1 from B) vs (1 from A + 3 from C). Let's call them $A_1,A_2,A_3,B_1$ vs $A_4,C_1,C_2,C_3$.
  - If they balance, the fake is in the remaining 3 of B ($B_2, B_3, B_4$), and must be light. **Weigh 3**: Weigh $B_2$ vs $B_3$.
  - If the left is heavy, the heavy fake must be in $A_1, A_2, A_3$. **Weigh 3**: Weigh $A_1$ vs $A_2$.
  - If the right is heavy, either $B_1$ is light, or $A_4$ is heavy. **Weigh 3**: Weigh $A_4$ against a real coin.

In all branches, 3 weighings are sufficient. The key insight is from [information theory](https://en.wikipedia.org/wiki/Information_theory): each weighing must maximally partition the remaining possibilities into 3 roughly equal groups.`,ko={id:Je,title:Xe,difficulty:Ke,estimatedTime:Ve,statement:Qe,publishDate:Ze,concepts:et,hints:tt,solution:nt},To=Object.freeze(Object.defineProperty({__proto__:null,concepts:et,default:ko,difficulty:Ke,estimatedTime:Ve,hints:tt,id:Je,publishDate:Ze,solution:nt,statement:Qe,title:Xe},Symbol.toStringTag,{value:"Module"})),it="two-egg-problem",ot="The Two Egg Problem",st="Medium",at="45-90 minutes",rt="You have a 100-story building and 2 identical eggs. You want to find the highest floor from which an egg can be dropped without breaking. An egg that survives a fall can be used again. A broken egg is discarded. What is the minimum number of drops you need in the worst case to guarantee finding the critical floor?",lt="2026-04-14",ht=[{name:"Dynamic Programming",description:"Solving complex problems by breaking them into overlapping subproblems.",resourceTitle:"Dynamic Programming",resourceUrl:"https://en.wikipedia.org/wiki/Dynamic_programming",readTime:"12 min"}],ct=[{order:1,content:"If you only had 1 egg, you'd have to start at floor 1 and go up one by one, taking up to 100 drops."},{order:2,content:"With 2 eggs, you can drop the first egg at intervals (e.g., 10, 20, 30). But if it breaks at 10, taking 1 drop, you use up to 9 drops for the rest (total 10). If it breaks at 100, you took 10 drops and need up to 9 more (total 19). Can you balance these worst-case scenarios?"},{order:3,content:"To minimize the maximum drops, the step size should decrease by 1 for each successful drop."}],dt=`### Step 1: The Goal
We want to minimize the maximum possible number of drops. Let the first egg drop from floor $n$.
If it breaks, we must use the second egg to test floors $1$ through $n-1$ linearly. The total drops used will be $1 + (n-1) = n$.

### Step 2: Balancing the Worst Case
If the first egg survives, we have used an attempt, so our remaining "budget" of drops to stay within the $n$ worst-case limit is now $n-1$.
Therefore, the next floor we jump to should be $n + (n-1)$.
If it survives again, we jump by $(n-2)$, up to $n + (n-1) + (n-2)$, and so forth. This decreasing-step approach is a form of [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) where each decision optimally accounts for the remaining resources.

### Step 3: Solving the Equation
To cover 100 floors, the sum of these jumps must be at least 100. This sum forms a [triangular number](https://en.wikipedia.org/wiki/Triangular_number):
$n + (n-1) + (n-2) + \\\\dots + 1 \\\\ge 100$
$\\\\frac{n(n+1)}{2} \\\\ge 100$
$n^2 + n \\\\ge 200$

If $n = 13$, $\\\\frac{13 \\\\times 14}{2} = 91$ (not enough).
If $n = 14$, $\\\\frac{14 \\\\times 15}{2} = 105$ (sufficient).

The minimum number of drops required in the worst-case scenario is **14**.`,_o={id:it,title:ot,difficulty:st,estimatedTime:at,statement:rt,publishDate:lt,concepts:ht,hints:ct,solution:dt},So=Object.freeze(Object.defineProperty({__proto__:null,concepts:ht,default:_o,difficulty:st,estimatedTime:at,hints:ct,id:it,publishDate:lt,solution:dt,statement:rt,title:ot},Symbol.toStringTag,{value:"Module"})),ut="pirate-game",mt="The Pirate Game",pt="Medium",ft="60-90 minutes",gt="5 perfectly rational pirates (A, B, C, D, E, listed from oldest to youngest) have 100 gold coins. The oldest pirate A proposes how to divide the coins. All pirates vote (including A). If 50% or more vote YES, the coins are distributed. If not, A is thrown overboard, and B becomes the oldest. This continues until a proposal is accepted. Furthermore, pirates are bloodthirsty: if a pirate gets the same amount of money whether they vote YES or NO, they will prefer NO just to watch someone die. What proposal should A make to maximize his gold?",yt="2026-04-15",bt=[{name:"Game Theory",description:"Mathematical models of strategic interactions.",resourceTitle:"Game Theory",resourceUrl:"https://en.wikipedia.org/wiki/Game_theory",readTime:"15 min"},{name:"Backward Induction",description:"Reasoning backwards in time to determine optimal actions.",resourceTitle:"Backward Induction",resourceUrl:"https://en.wikipedia.org/wiki/Backward_induction",readTime:"10 min"}],$t=[{order:1,content:"Solve it backwards. What happens if only D and E are left on the ship?"},{order:2,content:"If D and E are left, D needs 1 vote out of 2. Since 1 is 50%, D's own vote is enough. What is D's optimal proposal?"},{order:3,content:"Work your way back up to C, then B, and finally A, assuming everyone knows what happens in the future stages."}],wt=`### Step 1: 2 Pirates (D, E)
D needs 1 vote (50%). He votes for himself and the proposal passes regardless of E. 
Proposal: **[D: 100, E: 0]**. E gets nothing if it comes to this.

### Step 2: 3 Pirates (C, D, E)
C needs 2 votes. He needs one more vote besides his own. To buy E's vote, C must offer E strictly more than E gets if D is in charge (which is 0). So C offers E 1 coin. C doesn't need D's vote.
Proposal: **[C: 99, D: 0, E: 1]**.

### Step 3: 4 Pirates (B, C, D, E)
B needs 2 votes (2/4 is 50%). He needs one more vote. If B fails, C proposes [99, 0, 1]. To buy D's vote, B must offer D more than the 0 D gets from C. So B offers D 1 coin. B takes 99.
Proposal: **[B: 99, C: 0, D: 1, E: 0]**.

### Step 4: 5 Pirates (A, B, C, D, E)
A needs 3 votes. He needs two more votes. If A fails, B proposes [99, 0, 1, 0]. 
Using [backward induction](https://en.wikipedia.org/wiki/Backward_induction), A targets the pirates who get 0 under B's plan (C and E). A offers them each 1 coin, which is strictly better than the 0 they'd get under B. This is a classic result in [game theory](https://en.wikipedia.org/wiki/Game_theory).
Proposal: **[A: 98, B: 0, C: 1, D: 0, E: 1]**.`,xo={id:ut,title:mt,difficulty:pt,estimatedTime:ft,statement:gt,publishDate:yt,concepts:bt,hints:$t,solution:wt},Ao=Object.freeze(Object.defineProperty({__proto__:null,concepts:bt,default:xo,difficulty:pt,estimatedTime:ft,hints:$t,id:ut,publishDate:yt,solution:wt,statement:gt,title:mt},Symbol.toStringTag,{value:"Module"})),vt="mutilated-chessboard",kt="The Mutilated Chessboard",Tt="Easy",_t="15-30 minutes",St="You have an 8x8 chessboard and 31 dominos. Each domino covers exactly 2 adjacent squares. You cut off the top right corner square and the bottom left corner square of the chessboard. Can you completely cover the remaining 62 squares with your 31 dominos?",xt="2026-04-16",At=[{name:"Graph Coloring",description:"Assigning labels to items subject to topological constraints.",resourceTitle:"Graph Coloring",resourceUrl:"https://en.wikipedia.org/wiki/Graph_coloring",readTime:"10 min"}],Pt=[{order:1,content:"Consider the colors of the squares on a standard chessboard."},{order:2,content:"What colors does a single 2x1 domino cover?"},{order:3,content:"What are the colors of the two removed opposite corners?"}],Bt=`### Step 1: The Domain
A standard 8x8 chessboard consists of 64 squares: 32 white and 32 black. This [graph coloring](https://en.wikipedia.org/wiki/Graph_coloring) is the key to the proof.

### Step 2: The Domino Coverage
Every time you place a domino, regardless of orientation, it covers exactly 1 white square and 1 black square. Therefore, 31 dominos will universally cover exactly 31 white squares and 31 black squares. This is a fundamental constraint of [domino tiling](https://en.wikipedia.org/wiki/Domino_tiling).

### Step 3: The Mutilation
The opposite corners of a chessboard are always the **same color** (e.g., both black or both white).
By removing the top right and bottom left corners, you are left with a board that has 30 squares of one color and 32 squares of the other color.

### Conclusion
Since the 31 dominos require an equal number of black and white squares (31 of each), it is **impossible** to cover the mutilated chessboard.`,Po={id:vt,title:kt,difficulty:Tt,estimatedTime:_t,statement:St,publishDate:xt,concepts:At,hints:Pt,solution:Bt},Bo=Object.freeze(Object.defineProperty({__proto__:null,concepts:At,default:Po,difficulty:Tt,estimatedTime:_t,hints:Pt,id:vt,publishDate:xt,solution:Bt,statement:St,title:kt},Symbol.toStringTag,{value:"Module"})),Ct="camel-and-bananas",Dt="The Camel and the Bananas",It="Hard",jt="60-120 minutes",Et="A merchant has 3000 bananas and needs to transport them to a market 1000 miles away. He uses a camel that can carry at most 1000 bananas at a time. The camel eats 1 banana for every mile it walks (regardless of whether it's carrying a load or walking empty-handed). What is the maximum number of bananas the merchant can bring to the market?",Ot="2026-04-17",Wt=[{name:"Optimization Problems",description:"Finding the best solution from all feasible solutions.",resourceTitle:"Optimization",resourceUrl:"https://en.wikipedia.org/wiki/Mathematical_optimization",readTime:"10 min"}],Mt=[{order:1,content:"The camel needs to establish intermediate stockpiles along the path."},{order:2,content:"Since the camel holds 1000 bananas, how many trips are required to move 3000 bananas forward from the start? It takes 5 trips (3 forward, 2 back to fetch more)."},{order:3,content:"Once the stockpile inevitably drops to 2000 bananas due to consumption, how many trips are heavily required to move 2000 bananas?"}],qt=`### Step 1: Moving 3000 Bananas
To iteratively move 3000 bananas forward, the camel needs 3 trips forward and 2 return trips. This consumes 5 bananas per mile.
We should maintain this inefficiency only until the total stockpile drops to 2000, allowing us to drop a trip. This is a classic [optimization](https://en.wikipedia.org/wiki/Mathematical_optimization) problem where we minimize waste at each phase.
Losing 1000 bananas at 5 bananas/mile takes $1000 / 5 = 200$ miles. 
At mile 200, we perfectly consolidate exactly 2000 bananas.

### Step 2: Moving 2000 Bananas
To move 2000 bananas, the camel needs 2 trips forward and 1 return trip, consuming 3 bananas per mile.
We maintain this until the total stockpile drops to 1000. 
Losing 1000 bananas at 3 bananas/mile takes $1000 / 3 = 333.33$ miles. Since we deal in whole bananas, we travel 333 miles, eating 999 bananas. 
At mile $200 + 333 = 533$, we have 1001 bananas. We leave 1 behind, taking exactly 1000.

### Step 3: Moving 1000 Bananas
For the final 1000, the camel needs only 1 trip forward, consuming 1 banana/mile.
The remaining distance to the market is $1000 - 533 = 467$ miles.
The camel consumes 467 bananas on this final stretch.

Total delivered: $1000 - 467 = \\mathbf{533}$ bananas. The key insight is that the [greedy approach](https://en.wikipedia.org/wiki/Greedy_algorithm) of switching phases exactly when the stockpile hits a multiple of the carry capacity is provably optimal.`,Co={id:Ct,title:Dt,difficulty:It,estimatedTime:jt,statement:Et,publishDate:Ot,concepts:Wt,hints:Mt,solution:qt},Do=Object.freeze(Object.defineProperty({__proto__:null,concepts:Wt,default:Co,difficulty:It,estimatedTime:jt,hints:Mt,id:Ct,publishDate:Ot,solution:qt,statement:Et,title:Dt},Symbol.toStringTag,{value:"Module"})),Rt="100-prisoners-lightbulb",zt="100 Prisoners and a Light Bulb",Ut="Medium",Ht="45-90 minutes",Lt="100 prisoners are put into solitary confinement. The warden says: 'Every day sequentially, I will pick one prisoner uniformly at random and take them to a central room containing a single light bulb with a switch. The prisoner can toggle the switch or leave it. If a prisoner definitively states that EVERY prisoner has visited the room, you will be set free. If wrong, you are executed.' The light bulb is initially OFF. They have one meeting beforehand. What strategy guarantees freedom?",Gt="2026-04-18",Nt=[{name:"Distributed Algorithms",description:"Algorithms designed to run concurrently on multiple machines.",resourceTitle:"Distributed Algorithm",resourceUrl:"https://en.wikipedia.org/wiki/Distributed_algorithm",readTime:"10 min"}],Ft=[{order:1,content:"This requires asymmetric roles. Choose one prisoner to be the 'Counter'."},{order:2,content:"How do the other 99 prisoners signal to the Counter that they have visited the room? They share one bit of state."},{order:3,content:"A prisoner can signal by turning the bulb ON. When should they turn it on, and what should the Counter do with it?"}],Yt=`### Step 1: Assign Roles
The prisoners agree beforehand to designate exactly one of them as the 'Counter', and the other 99 as 'Drones'. This asymmetric role assignment is a common pattern in [distributed algorithms](https://en.wikipedia.org/wiki/Distributed_algorithm).

### Step 2: Drone Strategy
If a Drone enters the room and the light is OFF, and they have *never* turned the light ON before in a previous visit, they turn the light ON. 
Under any other circumstance (light is ON, or they have already signaled once historically), they do absolutely nothing.

### Step 3: Counter Strategy
If the Counter enters the room and the light is ON, they turn it OFF and add 1 to their mental count.
If the light is OFF, the Counter does nothing.

### Conclusion
Because a Drone only ever turns the light ON exactly once, the light turns ON exactly 99 times. Since only the Counter turns the light OFF and increments their count, their count is pure. Once the Counter's count reaches 99, they know every other prisoner has successfully signaled. They can safely announce that all 100 prisoners have visited the room. This works because the light bulb acts as a [token](https://en.wikipedia.org/wiki/Token_passing) in a one-bit communication channel.`,Io={id:Rt,title:zt,difficulty:Ut,estimatedTime:Ht,statement:Lt,publishDate:Gt,concepts:Nt,hints:Ft,solution:Yt},jo=Object.freeze(Object.defineProperty({__proto__:null,concepts:Nt,default:Io,difficulty:Ut,estimatedTime:Ht,hints:Ft,id:Rt,publishDate:Gt,solution:Yt,statement:Lt,title:zt},Symbol.toStringTag,{value:"Module"})),Jt="josephus-problem",Xt="The Josephus Problem",Kt="Medium",Vt="45-90 minutes",Qt="There are 100 soldiers standing in a circle, numbered 1 to 100. Counting starts at soldier number 1, who remains alive. Soldier 2 is eliminated, soldier 3 remains alive, soldier 4 is eliminated, and so on. The elimination proceeds around the circle, skipping those still alive, and eliminating every second living soldier until only one remains. Which soldier is the last survivor?",Zt="2026-04-08",en=[{name:"Binary Representation",description:"Using base-2 arithmetic to track patterns in sequences.",resourceTitle:"Binary Number System",resourceUrl:"https://en.wikipedia.org/wiki/Binary_number",readTime:"8 min"},{name:"Recurrence Relations",description:"An equation that recursively defines a sequence or multidimensional array of values.",resourceTitle:"Recurrence relation",resourceUrl:"https://en.wikipedia.org/wiki/Recurrence_relation",readTime:"10 min"}],tn=[{order:1,content:"Try playing the game with smaller numbers of soldiers, like $n = 2, 3, 4, 5, 6, 7, 8$. Do you see a pattern?"},{order:2,content:"Notice what happens when the number of soldiers is exactly a power of 2 (e.g., 2, 4, 8, 16). Who survives?"},{order:3,content:"Every number can be written as a power of 2 plus some remainder: $n = 2^m + l$. After $l$ people are eliminated, how many people are left, and whose turn is it?"}],nn=`### Step 1: Analyzing Small Cases
Let's denote the survivor for $n$ soldiers as $J(n)$. If we trace the game for small $n$:
- $J(1) = 1$
- $J(2) = 1$
- $J(3) = 3$
- $J(4) = 1$
- $J(5) = 3$
- $J(6) = 5$
- $J(7) = 7$
- $J(8) = 1$

### Step 2: Finding the Pattern
A clear pattern emerges: whenever $n$ is a power of 2 ($n = 2^m$), the survivor is always soldier #1. This makes sense: after one full trip around the circle, all even-numbered soldiers are eliminated, leaving exactly half the original number, and it's again #1's turn. This continues until #1 is the only one left.

### Step 3: Generalizing the Rule
For any number $n$, we can write it as $n = 2^m + l$, where $2^m$ is the largest power of 2 less than or equal to $n$, and $l$ is the remainder. In our case, $n = 100$, so $m = 6$ ($2^6 = 64$) and $l = 36$.
We start eliminating people. Each elimination removes one person. Once we eliminate exactly $l$ people, there will be $n - l = 2^m$ people remaining.
Since we eliminate every second person, removing $l$ people means $2l$ positions have been counted. The next person to act will be the one at position $2l + 1$.
At this exact moment, there are $2^m$ people remaining in the circle, and it is person $2l + 1$'s turn. Because the remaining number of people is a power of 2, the person whose turn it is will survive until the end.

### Conclusion
Applying our formula $J(n) = 2l + 1$ to $n = 100$:
1. $100 = 64 + 36$, so $l = 36$.
2. The survivor is $2(36) + 1 = 73$.

Soldier 73 survives. $\\blacksquare$`,Eo={id:Jt,title:Xt,difficulty:Kt,estimatedTime:Vt,statement:Qt,publishDate:Zt,concepts:en,hints:tn,solution:nn},Oo=Object.freeze(Object.defineProperty({__proto__:null,concepts:en,default:Eo,difficulty:Kt,estimatedTime:Vt,hints:tn,id:Jt,publishDate:Zt,solution:nn,statement:Qt,title:Xt},Symbol.toStringTag,{value:"Module"})),on="airplane-seating",sn="The Airplane Seating Problem",an="Medium",rn="30-60 minutes",ln="There are 100 passengers lined up to board an airplane with 100 sequentially numbered seats. Each passenger has a ticket for a specific assigned seat. The first passenger in line has lost their boarding pass and decides to board the plane and pick a seat uniformly at random. Every subsequent passenger boards one at a time and will take their own assigned seat if it is available. If their seat is already occupied, they will pick one of the remaining empty seats uniformly at random. What is the probability that the 100th passenger gets to sit in their originally assigned seat?",hn="2026-04-08",cn=[{name:"Probability Theory",description:"The branch of mathematics concerning numerical descriptions of how likely an event is to occur.",resourceTitle:"Probability",resourceUrl:"https://en.wikipedia.org/wiki/Probability",readTime:"10 min"},{name:"Symmetry in Mathematics",description:"Using symmetric states to evaluate probabilities without expanding vast decision trees.",resourceTitle:"Symmetry in Probability",resourceUrl:"https://en.wikipedia.org/wiki/Symmetry",readTime:"5 min"}],dn=[{order:1,content:"What happens if the first passenger randomly picks seat 1? What if they pick seat 100?"},{order:2,content:"If the first passenger picks seat $k$, what happens when the 2nd passenger up to the $(k-1)$-th passenger board?"},{order:3,content:"When the final passenger boards, there is exactly one seat left. Which two seats are the only ones that could possibly be left?"}],un=`### Step 1: The Initial Choice
When the first passenger boards, they choose one of the 100 seats at random. Let's analyze the extreme cases:
1. If they sit in **Seat 1** (their own assigned seat), every subsequent passenger will find their assigned seat available. The 100th passenger will get Seat 100. (Probability 1)
2. If they sit in **Seat 100**, then every passenger from 2 to 99 will sit in their correct seats. When the 100th passenger boards, only Seat 1 will be left. (Probability 0)

### Step 2: The Chain Reaction
If the first passenger sits in an intermediate seat, say Seat $k$, then passengers 2 through $k-1$ will sit in their correct, empty seats. 
However, when passenger $k$ boards, they find their seat occupied. At this point, passenger $k$ is in the exact same situation as passenger 1 was: they must choose a remaining empty seat uniformly at random.
The set of remaining seats includes Seat 1, Seat 100, and some other intermediate seats.

### Step 3: Analyzing Symmetry
The key insight is that anyone who is displaced and forced to pick a random seat will be equally likely to pick Seat 1 or Seat 100 from the remaining pool. 
Any intermediate seat chosen simply passes the "bump" down the line to another passenger later. The sequence of random seat changes entirely resolves the moment someone finally sits in either Seat 1 or Seat 100.
Because Seat 1 and Seat 100 are completely symmetric in the eyes of any passenger forced to guess, the chain reaction is equally likely to terminate with someone sitting in Seat 1 as it is with someone sitting in Seat 100.

### Conclusion
When the chain reaction finishes, one of those two "terminal" seats is taken. Thus, the last remaining seat for the 100th passenger will either be Seat 1 or Seat 100, with equal probability.
Therefore, the probability that the 100th passenger gets their own seat is **1/2**. $\\blacksquare$`,Wo={id:on,title:sn,difficulty:an,estimatedTime:rn,statement:ln,publishDate:hn,concepts:cn,hints:dn,solution:un},Mo=Object.freeze(Object.defineProperty({__proto__:null,concepts:cn,default:Wo,difficulty:an,estimatedTime:rn,hints:dn,id:on,publishDate:hn,solution:un,statement:ln,title:sn},Symbol.toStringTag,{value:"Module"})),mn="cheryls-birthday",pn="Cheryl's Birthday",fn="Medium",gn="30-60 minutes",yn=`Albert and Bernard just became friends with Cheryl, and they want to know when her birthday is. Cheryl gives them a list of 10 possible dates:
- May 15, May 16, May 19
- June 17, June 18
- July 14, July 16
- August 14, August 15, August 17

Cheryl then tells Albert and Bernard separately the month and the day of her birthday respectively (Albert only knows the month, Bernard only knows the day).

Albert: "I don't know when Cheryl's birthday is, but I know that Bernard does not know too."
Bernard: "At first I didn't know when Cheryl's birthday was, but now I know."
Albert: "Then I also know when Cheryl's birthday is."

So when is Cheryl's birthday?`,bn="2026-04-08",$n=[{name:"Logical Deduction",description:"The process of reasoning from one or more statements to reach a logically certain conclusion.",resourceTitle:"Deductive Reasoning",resourceUrl:"https://en.wikipedia.org/wiki/Deductive_reasoning",readTime:"5 min"},{name:"Common Knowledge",description:"Information that everyone knows, and everyone knows that everyone knows.",resourceTitle:"Common Knowledge (Logic)",resourceUrl:"https://en.wikipedia.org/wiki/Common_knowledge_(logic)",readTime:"5 min"}],wn=[{order:1,content:"Look at Albert's first statement: he knows Bernard doesn't know. Which days are mathematically unique initially?"},{order:2,content:"Days 18 and 19 appear only once. If Bernard had 18 or 19, he would know the birthday immediately. Since Albert knows Bernard *doesn't* know, Albert's month cannot possibly contain the 18th or 19th."},{order:3,content:"Once those months are eliminated, Bernard suddenly knows the date. Which dates remain, and which of their days are unique among the remaining options?"}],vn=`### Step 1: Albert's First Statement
Albert says: "I don't know when Cheryl's birthday is, but I know that Bernard does not know too."
If Bernard knew the exact date right away, it means the day he was told is unique across all options. The only unique days are **18 (June 18)** and **19 (May 19)**. 
If Albert was told May or June, he would know there's a *chance* Bernard was holding 18 or 19, so Albert couldn't be absolutely sure Bernard didn't know.
The only way Albert can be 100% certain that Bernard doesn't know is if Albert's month contains *no* unique days. Therefore, Albert's month must be either **July** or **August**.
Remaining possibilities:
- July 14, July 16
- August 14, August 15, August 17

### Step 2: Bernard's Response
Bernard says: "At first I didn't know when Cheryl's birthday was, but now I know."
Bernard, holding the specific day, has been listening. He just logically eliminated May and June alongside us. He is now looking at the July and August dates.
Since he now knows the date precisely, his day must pinpoint the exact month. If he were holding **14**, he still wouldn't know if it was July 14 or August 14. Therefore, the day cannot be 14.
Remaining possibilities:
- July 16
- August 15, August 17

### Step 3: Albert's Final Deduction
Albert says: "Then I also know when Cheryl's birthday is."
Albert knows the month. If his month were August, he would still be choosing between August 15 and August 17, so he wouldn't know the exact date. Because he *does* know the exact date, his month must be the one with only a single remaining option.
That month is **July**. 

### Conclusion
The only remaining valid date is **July 16**. $\\blacksquare$`,qo={id:mn,title:pn,difficulty:fn,estimatedTime:gn,statement:yn,publishDate:bn,concepts:$n,hints:wn,solution:vn},Ro=Object.freeze(Object.defineProperty({__proto__:null,concepts:$n,default:qo,difficulty:fn,estimatedTime:gn,hints:wn,id:mn,publishDate:bn,solution:vn,statement:yn,title:pn},Symbol.toStringTag,{value:"Module"})),kn="secretary-problem",Tn="The Secretary Problem",_n="Hard",Sn="60-120 minutes",xn="You are interviewing 100 candidates for a single secretarial position. You interview them one by one in a random order. After each interview, you must immediately decide whether to hire the candidate or reject them forever. You cannot go back and hire a rejected candidate later. Your goal is to maximize the probability of hiring the *single absolute best* candidate among the 100. What is the optimal strategy, and roughly what is the probability of success using this strategy?",An="2026-04-08",Pn=[{name:"Optimal Stopping Theory",description:"Mathematics of choosing a specific time to take a particular action to maximize an expected reward.",resourceTitle:"Optimal Stopping",resourceUrl:"https://en.wikipedia.org/wiki/Optimal_stopping",readTime:"10 min"},{name:"1/e Law of Best Choice",description:"A specific finding in probability involving the mathematical constant e.",resourceTitle:"Secretary Problem",resourceUrl:"https://en.wikipedia.org/wiki/Secretary_problem",readTime:"15 min"}],Bn=[{order:1,content:"If you just pick the first person, your chance of getting the best is 1/100. There must be a better way."},{order:2,content:"Consider a strategy where you observe the first $r$ candidates to set a baseline standard, reject them all, and then immediately hire the next candidate who is better than all the first $r$ candidates."},{order:3,content:"Calculus can be used to optimize the cut-off fraction $r/n$. The maximum occurs around the mathematical constant $1/e$."}],Cn=`### Step 1: Framing the Strategy
Because we know absolutely nothing about the candidates beforehand, any information we acquire must come from observing them. A logical strategy is the **Look-Then-Leap Strategy**:
1. Observe a certain number of initial candidates (let's call this number $r$).
2. Reject all of them, but remember the quality of the best candidate among this initial group (the 'benchmark').
3. Continue interviewing the remaining candidates. Hire the *very first* candidate who is strictly better than the benchmark.

### Step 2: Calculating the Probability of Success
Assume there are $n$ total candidates. Let's find the probability that we pick the absolute best candidate using a cutoff $r$.
We only succeed if the true #1 best candidate is placed at some position $i > r$, AND we didn't mistakenly hire someone else before reaching them. This means the best candidate among the first $i-1$ people MUST be located within our initial rejected pool of $r$ people. If they weren't, we would have prematurely hired someone in the $r < j < i$ range!

The probability that the maximum of the first $i-1$ elements falls into the first $r$ spots is simply $\\frac{r}{i-1}$.
The probability that the true best candidate is at position $i$ is $\\frac{1}{n}$.

Thus, the total probability of success $P(r)$ across all possible positions $i$ from $r+1$ to $n$ is:
$P(r) = \\sum_{i=r+1}^{n} \\left( \\frac{1}{n} \\cdot \\frac{r}{i-1} \\right) = \\frac{r}{n} \\sum_{i=r+1}^{n} \\frac{1}{i-1}$

### Step 3: Finding the Optimal Cutoff
For large $n$, the Riemann sum $\\sum \\frac{1}{i-1}$ can be approximated by an integral:
$P(x) \\approx x \\int_{x}^{1} \\frac{1}{t} dt = -x \\ln(x)$, where $x = \\frac{r}{n}$ is the fraction of candidates we initially reject.

To find the peak probability, we take the derivative with respect to $x$ and set it to 0:
$P'(x) = -1 \\cdot \\ln(x) + (-x) \\cdot \\frac{1}{x} = -\\ln(x) - 1 = 0$
$\\ln(x) = -1 \\implies x = e^{-1} = \\frac{1}{e} \\approx 0.368$

### Conclusion
The optimal strategy is to interview and reject the first $1/e$ fraction (about 37%) of candidates, noting the best among them. Then, hire the very next candidate who surpasses that benchmark. The probability of successfully hiring the absolute best candidate is roughly **$1/e$ or 36.8%**. $\\blacksquare$`,zo={id:kn,title:Tn,difficulty:_n,estimatedTime:Sn,statement:xn,publishDate:An,concepts:Pn,hints:Bn,solution:Cn},Uo=Object.freeze(Object.defineProperty({__proto__:null,concepts:Pn,default:zo,difficulty:_n,estimatedTime:Sn,hints:Bn,id:kn,publishDate:An,solution:Cn,statement:xn,title:Tn},Symbol.toStringTag,{value:"Module"})),Dn="game-of-nim",In="The Game of Nim",jn="Hard",En="60-90 minutes",On="Two players are playing a game with three heaps of matches. The first heap has 3 matches, the second has 4, and the third has 5. Players take turns removing any positive number of matches from a single chosen heap. The player who takes the last match on the table wins the game. If both players play perfectly, does the first player or the second player have a guaranteed winning strategy? If so, what is the optimal first move?",Wn="2026-04-08",Mn=[{name:"Combinatorial Game Theory",description:"Mathematical theory that studies sequential games with perfect information.",resourceTitle:"Combinatorial Game Theory",resourceUrl:"https://en.wikipedia.org/wiki/Combinatorial_game_theory",readTime:"10 min"},{name:"Nim-Sum (XOR)",description:"A specific non-carrying binary addition used to evaluate mathematical games.",resourceTitle:"Nim",resourceUrl:"https://en.wikipedia.org/wiki/Nim",readTime:"12 min"}],qn=[{order:1,content:"Represent the size of each heap (3, 4, and 5) in binary representation."},{order:2,content:"Perform a bitwise XOR (exclusive OR) operation across all three binary numbers. In game theory, this is known as the 'nim-sum'."},{order:3,content:"According to Bouton's Theorem, a player has a winning strategy if and only if the nim-sum of the heap sizes is strictly greater than 0 before their turn."}],Rn=`### Step 1: Converting to Binary
The game of Nim is fully solved by translating the heap sizes into binary blocks. Let's write the sizes of the three heaps in binary:
- Heap 1: $3 \\rightarrow 011_2$
- Heap 2: $4 \\rightarrow 100_2$
- Heap 3: $5 \\rightarrow 101_2$

### Step 2: Calculating the Nim-Sum
In Combinatorial Game Theory, the state of the game is determined by its **nim-sum** (the bitwise XOR, denoted as $\\oplus$, of the heap sizes). We do this by adding the columns of the binary numbers without carrying over, taking the result modulo 2.

  $011$
  $100$
+ $101$
-------
  $010$

Converting $010_2$ back to decimal gives a nim-sum of **2**. 

### Step 3: Bouton's Theorem
Charles Bouton proved that in a normal play game of Nim, the first player to move has a guaranteed winning strategy if and only if the nim-sum of the initial heaps is strictly greater than zero. Since our initial nim-sum is 2, **the first player has a guaranteed winning strategy**.

A winning move must be one that leaves the board with a nim-sum of exactly 0 for the opponent. If the opponent receives a board with a nim-sum of 0, any move they make will force the nim-sum to become non-zero again, allowing the first player to perpetually maintain control until the heaps are empty.

### Step 4: Finding the Winning Move
To make the nim-sum 0, the first player needs to alter a single heap such that its new binary value XOR-ed with the remaining heaps equals 0.
We XOR the current total nim-sum ($010_2$) with each heap to see what the target size should be:
- Heap 1: $011 \\oplus 010 = 001_2$ (which is 1). Since $1 < 3$, reducing Heap 1 to 1 is a valid move.
- Heap 2: $100 \\oplus 010 = 110_2$ (which is 6). Since $6 > 4$, we cannot increase a heap.
- Heap 3: $101 \\oplus 010 = 111_2$ (which is 7). Since $7 > 5$, we cannot increase a heap.

### Conclusion
The first player has the winning strategy. The unique optimal first move is to **take 2 matches from the first heap**, leaving 1 match. This makes the heaps 1, 4, 5, which has a nim-sum of exactly 0. $\\blacksquare$`,Ho={id:Dn,title:In,difficulty:jn,estimatedTime:En,statement:On,publishDate:Wn,concepts:Mn,hints:qn,solution:Rn},Lo=Object.freeze(Object.defineProperty({__proto__:null,concepts:Mn,default:Ho,difficulty:jn,estimatedTime:En,hints:qn,id:Dn,publishDate:Wn,solution:Rn,statement:On,title:In},Symbol.toStringTag,{value:"Module"})),zn="prisoners-hat-parity",Un="The Prisoners' Hat Parity",Hn="Hard",Ln="45-90 minutes",Gn=`One hundred prisoners are lined up facing forward in a single-file line. The executioner places either a black hat or a white hat on each prisoner's head. Every prisoner can see the hats of everyone in front of them in the line, but they cannot see their own hat, nor the hats of the people behind them. 
Starting from the back of the line (the person who can see the 99 hats in front of them), each prisoner must guess the color of their own hat out loud. The executioner will execute anyone who guesses incorrectly. The prisoners are allowed to devise a strategy beforehand, but once the hats are placed, they can only communicate by saying the word 'Black' or 'White' on their turn. What strategy guarantees the maximum number of survivors, and how many prisoners are guaranteed to survive?`,Nn="2026-04-08",Fn=[{name:"Parity Bit",description:"An additional bit of information that acts as a check on a set of binary values.",resourceTitle:"Parity Bit",resourceUrl:"https://en.wikipedia.org/wiki/Parity_bit",readTime:"6 min"},{name:"Information Theory",description:"The mathematical study of the quantification, storage, and communication of information.",resourceTitle:"Information Theory",resourceUrl:"https://en.wikipedia.org/wiki/Information_theory",readTime:"12 min"}],Yn=[{order:1,content:"The person at the very back can't possibly deduce their own hat color, so they have a 50% chance of dying anyway. Could they sacrifice their guess to encode information for the remaining 99 prisoners?"},{order:2,content:"There are two colors. Think of 'Black' as 1 and 'White' as 0. How can the back prisoner communicate the parity (even or odd sum) of the remaining 99 hats?"},{order:3,content:"If the back prisoner says 'Black' when they see an odd number of black hats, how can the next prisoner figure out their own hat from what they see in front of them?"}],Jn=`### Step 1: Evaluating Information Transfer
Since the prisoner at the very back of the line cannot see their own hat or hear anyone else's guess, they have exactly 0 bits of information about their own hat. They have a $50\\%$ chance of survival no matter what.
However, this first prisoner's guess is heard by all 99 people in front of them. The prisoners can agree beforehand that the first person's guess conveys a mathematical invariant about the 99 hats they see.

### Step 2: The Parity Strategy
The prisoners agree on the following rule:
- The first prisoner (at the back) will count the number of **Black** hats they see in front of them.
- If the number of Black hats is **odd**, they shout 'Black'.
- If the number of Black hats is **even**, they shout 'White'.

### Step 3: Deduction by the Remaining Prisoners
Now consider the second prisoner from the back (who can see 98 hats).
- They heard the first prisoner. Let's assume the first prisoner shouted 'Black' (meaning there are an odd number of Black hats among prisoners 2 through 100).
- The second prisoner counts the Black hats they see in front of them (prisoners 3 through 100).
- If they count an **even** number of Black hats in front, but the total sum (2 through 100) is **odd**, then their own hat MUST be Black.
- If they count an **odd** number of Black hats in front, and the total sum is **odd**, then their own hat MUST be White.

After the second prisoner shouts their deduced hat color, they are 100% guaranteed to survive. 

What about the third prisoner?
- The third prisoner saw the 97 hats in front of them. 
- They heard the parity of 2-100 from the first prisoner.
- They heard the exact color of prisoner 2's hat.
- Using this information, they mentally subtract prisoner 2's hat from the grand total. They now know the exact parity of prisoners 3-100. By comparing this to what they see (prisoners 4-100), they deduce their own hat with 100% certainty.

### Conclusion
This chain of logic continues down the entire line. Every prisoner dynamically tracks the running parity using the very first announcement and the subsequent correct guesses behind them. 
By using a **[Parity Bit](https://en.wikipedia.org/wiki/Parity_bit)**, the first prisoner faces a 50/50 chance, but provides enough information to guarantee the survival of the other 99.
Thus, this strategy guarantees **exactly 99 survivors**. $\\blacksquare$`,Go={id:zn,title:Un,difficulty:Hn,estimatedTime:Ln,statement:Gn,publishDate:Nn,concepts:Fn,hints:Yn,solution:Jn},No=Object.freeze(Object.defineProperty({__proto__:null,concepts:Fn,default:Go,difficulty:Hn,estimatedTime:Ln,hints:Yn,id:zn,publishDate:Nn,solution:Jn,statement:Gn,title:Un},Symbol.toStringTag,{value:"Module"})),Xn="art-gallery",Kn="The Art Gallery Problem",Vn="Hard",Qn="60-120 minutes",Zn="Imagine an art gallery whose floor plan is a purely simple polygon (no self-intersections, no internal holes) defined by $n$ straight walls, meaning it has $n$ vertices. You need to place stationary security guards inside the gallery. Each guard has a 360-degree field of view and can see indefinitely far, provided their line of sight is not blocked by a wall. In the geometric worst-case scenario for a gallery with $n$ vertices, what is the strict maximum number of guards that you could be forced to place such that every point inside the gallery is visible to at least one guard? Prove your answer.",ei="2026-04-08",ti=[{name:"Polygon Triangulation",description:"The decomposition of a polygon into a set of triangles.",resourceTitle:"Polygon Triangulation",resourceUrl:"https://en.wikipedia.org/wiki/Polygon_triangulation",readTime:"10 min"},{name:"Graph Coloring",description:"An assignment of labels traditionally called 'colors' to elements of a graph subject to certain constraints.",resourceTitle:"Graph Coloring",resourceUrl:"https://en.wikipedia.org/wiki/Graph_coloring",readTime:"10 min"}],ni=[{order:1,content:"Any simple polygon can be cut into exactly $n-2$ discrete triangles by drawing non-intersecting diagonals between vertices."},{order:2,content:"Think of the vertices as nodes in a graph. Can you perfectly 'color' the vertices of these triangles using exactly 3 colors, such that no two connected vertices share a color?"},{order:3,content:"If you 3-color the vertices, each triangle will contain exactly one vertex of each color. What happens if you place guards only on the vertices of the 'least used' color?"}],ii=`### Step 1: Polygon Triangulation
The problem asks for the worst-case number of guards for an $n$-sided polygon. We can solve this using **Chvátal's Art Gallery Theorem** and Steve Fisk's elegant proof.
First, any simple polygon with $n$ vertices can be triangulated into exactly $n-2$ contiguous triangles by drawing straight non-intersecting diagonals between vertices. Because a triangle is a completely convex shape, a guard placed at *any* vertex of a given triangle can see the entire interior of that specific triangle.

### Step 2: 3-Coloring the Graph
If we view the triangulated polygon as a graph (where corners are vertices and walls/diagonals are edges), this graph can always be strictly 3-colored. 
To 3-color it, we assign each vertex a color—Red, Blue, or Green—such that no line segment connects two vertices of the same color. Because the dual graph of a triangulated simple polygon is a tree, we can start at any triangle (coloring its 3 vertices R, B, G) and proceed outwards without ever encountering an impossible color conflict.

### Step 3: Exploliting the Coloring
Because we used exactly 3 colors, every single triangle in the entire polygon has precisely one Red vertex, one Blue vertex, and one Green vertex. 
If we were to place a guard on every Red vertex, the entire interior of every triangle would be monitored, because every triangle contains a Red vertex. The same is true if we put guards exclusively on Blue vertices, or exclusively on Green vertices.

### Step 4: The Minimum Color Class
By the [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_Principle), if $n$ vertices are divided amongst 3 colors, at least one of those colors must be assigned to at most $\\lfloor n/3 \\rfloor$ vertices. 
By actively selecting the 'least used' color array and placing guards there, we guarantee that we never need more than $\\lfloor n/3 \\rfloor$ guards to monitor every triangle, and thus the entire gallery.

### Proof of the Worst-Case Lower Bound
Is it possible we could get away with fewer? No. Consider a comb-like polygon with $\\lfloor n/3 \\rfloor$ 'prongs'. Each prong requires its own distinct guard to see into the depth of the prong, as the central hallway does not allow sightlines into multiple prongs simultaneously.

### Conclusion
The maximum number of guards necessary in the worst-case scenario is exactly **$\\lfloor n/3 \\rfloor$**. $\\blacksquare$`,Fo={id:Xn,title:Kn,difficulty:Vn,estimatedTime:Qn,statement:Zn,publishDate:ei,concepts:ti,hints:ni,solution:ii},Yo=Object.freeze(Object.defineProperty({__proto__:null,concepts:ti,default:Fo,difficulty:Vn,estimatedTime:Qn,hints:ni,id:Xn,publishDate:ei,solution:ii,statement:Zn,title:Kn},Symbol.toStringTag,{value:"Module"})),oi="stable-marriage",si="The Stable Marriage Problem",ai="Hard",ri="60-120 minutes",li="There are $n$ men and $n$ women in a community. Each man evaluates all $n$ women and ranks them in order of priority, and each woman ranks all $n$ men in order of her strict preference. A complete matching of marriages is considered *unstable* if there exists a man and a woman who are not married to each other, but who both prefer each other over their actual current partners. Prove that for any arbitrary set of preferences, a stable complete matching always exists, and logically describe an algorithm to consistently find one.",hi="2026-04-08",ci=[{name:"Matching Theory",description:"A branch of graph theory and economics regarding the assigning of sets.",resourceTitle:"Matching (Graph Theory)",resourceUrl:"https://en.wikipedia.org/wiki/Matching_(graph_theory)",readTime:"10 min"},{name:"Gale-Shapley Algorithm",description:"An algorithm for finding a solution to the stable matching problem.",resourceTitle:"Gale-Shapley Algorithm",resourceUrl:"https://en.wikipedia.org/wiki/Gale%E2%80%93Shapley_algorithm",readTime:"15 min"}],di=[{order:1,content:"Imagine an algorithm that happens in isolated 'rounds'. Let the men 'propose' to their highest-ranked choices."},{order:2,content:"If a woman receives multiple proposals, she temporarily accepts the best one and rejects the rest. Why 'temporarily'?"},{order:3,content:"If a man gets rejected, he moves down his list. If a woman is proposed to by someone better than her current temporary match, she swaps them. Prove this MUST eventually terminate, and when it does, it MUST be stable."}],ui=`### Step 1: The Deferred Acceptance Algorithm
To prove that a stable matching always exists, David Gale and Lloyd Shapley formulated the **Deferred Acceptance Algorithm**:
1. Play proceeds in 'rounds'. Every unengaged man proposes to the highest woman on his preference list to whom he has not yet proposed.
2. Each woman reviews all the proposals she received that round, *plus* her current temporary fiancé (if any).
3. The woman tentatively accepts the proposal from the man she prefers highest among this pool, and permanently rejects all others.
4. Men who are rejected become 'unengaged' again. In the next round, they simply cross that woman off their list and propose to the next woman on their list.
5. The process repeats until no men are unengaged.

### Step 2: Proof of Termination
Does the algorithm run forever? No. 
Every time a man is rejected, he moves down his list. Because there are $n$ women, a man can be rejected at most $n$ times before his list is empty. Across all $n$ men, there are a maximum of $n^2$ possible proposals. Therefore, the algorithm is strictly guaranteed to terminate in finite time. Additionally, as soon as a woman receives a proposal, she is engaged from that point forward; she only 'upgrades' her fiancé, never returning to an unengaged state. Thus, all $n$ men and $n$ women will eventually be paired.

### Step 3: Proof of Stability
We must prove by contradiction that the resulting matching contains no unstable pairs. 
Assume the matching is terminated, but it is unstable. This means there is a Man $A$ and a Woman $B$ who are not married to each other, but who strictly prefer each other over their assigned respective partners (Man $A$ is with Woman $Y$; Woman $B$ is with Man $X$).

If Man $A$ prefers Woman $B$ over his assigned partner $Y$, the algorithm dictates he *must* have proposed to Woman $B$ before ever proposing to $Y$ (since he proposes in strict, descending priority).
Since Man $A$ proposed to Woman $B$, why aren't they together? The only way Woman $B$ did not end up with Man $A$ is if she rejected him. And the algorithm states that a woman only rejects a man if she receives a proposal from someone she ranks strictly *higher*.
Therefore, the final partner of Woman $B$ (Man $X$) MUST be ranked higher on her list than Man $A$.
This directly contradicts the assumption that Woman $B$ prefers Man $A$ over her assigned partner.

### Conclusion
Because an unstable pair implies a logical paradox within the matching constraints, the algorithm's final output is purely stable. The existence of the **[Gale-Shapley Algorithm](https://en.wikipedia.org/wiki/Gale%E2%80%93Shapley_algorithm)** constructively proves that a stable complete matching universally exists for any possible set of ranked preferences. $\\blacksquare$`,Jo={id:oi,title:si,difficulty:ai,estimatedTime:ri,statement:li,publishDate:hi,concepts:ci,hints:di,solution:ui},Xo=Object.freeze(Object.defineProperty({__proto__:null,concepts:ci,default:Jo,difficulty:ai,estimatedTime:ri,hints:di,id:oi,publishDate:hi,solution:ui,statement:li,title:si},Symbol.toStringTag,{value:"Module"})),mi="party-handshake",pi="The Party Handshake Problem",fi="Medium",gi="30-60 minutes",yi="You and your partner attend a party with four other couples, making 10 people in total. As people arrive, greetings are exchanged with handshakes. Naturally, no one shakes hands with themselves, and no one shakes hands with their own partner. After all the handshaking is complete, you ask each of the other 9 people (including your partner) how many hands they shook. Remarkably, you receive 9 different answers. How many hands did your partner shake?",bi="2026-04-08",$i=[{name:"Graph Theory",description:"The study of graphs, mathematical structures used to model pairwise relations.",resourceTitle:"Graph Theory",resourceUrl:"https://en.wikipedia.org/wiki/Graph_theory",readTime:"10 min"},{name:"Degree Sequence",description:"A monotonic non-increasing sequence of the vertex degrees of a graph.",resourceTitle:"Degree (Graph Theory)",resourceUrl:"https://en.wikipedia.org/wiki/Degree_(graph_theory)",readTime:"5 min"}],wi=[{order:1,content:"Since there are 10 people, what is the maximum number of people any one person can shake hands with? Remember, you can't shake your own hand, nor your partner's."},{order:2,content:"The 9 distinct answers you received MUST be the numbers 0, 1, 2, 3, 4, 5, 6, 7, and 8. Who is married to the person who shook 8 hands?"},{order:3,content:"Work your way inward. The person who shook 8 hands must be partners with the person who shook 0 hands. The person who shook 7 must be partnered with whoever shook 1."}],vi=`### Step 1: Clarifying the Maximums
There are 10 people at the party. A single person cannot shake hands with themselves (1 person), nor with their partner (1 person). Thus, the absolute maximum number of hands anyone could possibly shake is $10 - 2 = 8$.

### Step 2: Interpreting the Responses
You asked 9 different people and got 9 completely different answers. Because the answers must be integers between 0 and 8 inclusive, the 9 answers you received MUST perfectly map to the set $\\{0, 1, 2, 3, 4, 5, 6, 7, 8\\}$.

### Step 3: Determining the Couples
Let's map out the nodes (people). 
Look at the person who answered **8**. They shook hands with every single eligible person at the party. That means every other couple *must* have shaken their hand.
Now look at the person who answered **0**. They shook no one's hand.
If someone shook 8 hands, they reached everybody. The only person remaining who could possibly have a 0 is the partner of the person who shook 8. Therefore, **8 and 0 are a couple**.

Now, temporarily mentally 'remove' the 8 and 0 couple from the diagram. Subtract 1 from everybody's totals (since everyone else shook 8's hand).
The remaining network of 8 people now has adjusted handshake counts ranging from 0 to 6. But originally, these were the people who answered 1 through 7. 
The person who answered **7** (now 6) shook hands with everyone remaining. The person who answered **1** (now 0) shook hands with no one remaining. By the exact same logic, **7 and 1 are a couple**.

Following this recursive pairing pattern:
- **8 and 0** are a couple.
- **7 and 1** are a couple.
- **6 and 2** are a couple.
- **5 and 3** are a couple.

### Conclusion
All unpartnered bounds shrink inwards symmetrically. The 8 distinct numbers we investigated form 4 complete couples. 
We accounted for 8 specific people, leaving exactly two people without determined pairs from our logical matching: you, and your partner. 
The only number strictly remaining in the full set of answers that we didn't map a couple for is **4**. Wait, you and your partner are a couple, so you both must share the middle ground.
Your partner's handshake count was logically deduced to be **4**, leaving you as the other 4. $\\blacksquare$`,Ko={id:mi,title:pi,difficulty:fi,estimatedTime:gi,statement:yi,publishDate:bi,concepts:$i,hints:wi,solution:vi},Vo=Object.freeze(Object.defineProperty({__proto__:null,concepts:$i,default:Ko,difficulty:fi,estimatedTime:gi,hints:wi,id:mi,publishDate:bi,solution:vi,statement:yi,title:pi},Symbol.toStringTag,{value:"Module"})),ki="st-petersburg",Ti="The St. Petersburg Paradox",_i="Hard",Si="45-90 minutes",xi="A casino offers a unique game of chance: you repeatedly flip a fair coin until it lands on tails, at which point the game ends. If the first tails appears on the $k$-th flip, the casino pays you $2^k$ dollars. For example, getting tails on the very first flip pays $2$, getting heads then tails pays $4$, heads-heads-tails pays $8$, and so on. What is the expected mathematical value of your winnings? If you want to play this game rationally, what is the maximum finite amount of money you should be willing to pay the casino to enter the game?",Ai="2026-04-08",Pi=[{name:"Expected Value",description:"A predicted value of a variable, calculated as the sum of all possible values each multiplied by the probability of its occurrence.",resourceTitle:"Expected Value",resourceUrl:"https://en.wikipedia.org/wiki/Expected_value",readTime:"10 min"},{name:"Expected Utility Theory",description:"An economic theory dealing with decision-making processes regarding choices with uncertain outcomes.",resourceTitle:"Expected Utility",resourceUrl:"https://en.wikipedia.org/wiki/Expected_utility_hypothesis",readTime:"15 min"}],Bi=[{order:1,content:"Calculate the expected value. The probability of getting tails on the 1st flip is $1/2$. The payout is 2. The expected value for this outcome is 1."},{order:2,content:"Calculate the expected value contribution of the 2nd flip landing on tails. The probability is $1/4$. The payout is 4. Calculate for the 3rd, the 4th, and sum them as an infinite series."},{order:3,content:"If the expected value evaluates to infinity, why wouldn't you pay a billion dollars to play? Consider the concept of 'Utility' vs strict monetary value."}],Ci=`### Step 1: Calculating the Expected Value
The expected value $E$ of a random variable is the sum over all possible outcomes characterizing the probability of the outcome multiplied by the payout. 
- Outcome 1 (Tails on flip 1): Probability is $\\frac{1}{2}$. Payout is $2^1 = 2$. Contribution: $\\frac{1}{2} \\times 2 = 1$
- Outcome 2 (Heads, then Tails): Probability is $\\frac{1}{4}$. Payout is $2^2 = 4$. Contribution: $\\frac{1}{4} \\times 4 = 1$
- Outcome 3 (H-H-T): Probability is $\\frac{1}{8}$. Payout is $2^3 = 8$. Contribution: $\\frac{1}{8} \\times 8 = 1$

Generalizing for the $k$-th flip:
$E = \\sum_{k=1}^{\\infty} \\left( \\frac{1}{2^k} \\times 2^k \\right) = \\sum_{k=1}^{\\infty} 1 = 1 + 1 + 1 + \\dots = \\infty$

Strict mathematical probability dictates the expected payoff of the game is **infinite**.

### Step 2: The Paradox and Rationality
The theoretical expected value suggests a completely logical person should be willing to pay their entire life savings to play this game even once. However, no rational person would pay a million dollars to play, because there is a $50\\%$ chance they will walk away with only 2 dollars.

### Step 3: Expected Utility Resolution
The paradox was historically resolved by Daniel Bernoulli, who introduced the concept of **Expected Utility**. Bernoulli argued that the subjective value (utility) of money to a person is non-linear—specifically, logarithmic. 
A million dollars is extremely valuable to a poor person, but nearly meaningless to a billionaire. Therefore, as payouts scale to infinity, their *utility* does not scale uniformly.

If we apply a logarithmic utility function $u(w) = \\ln(w)$ (meaning the perceived value of money scales logarithmically), the expected utility $E[u]$ becomes:
$E[u] = \\sum_{k=1}^{\\infty} \\left( \\frac{\\ln(2^k)}{2^k} \\right) = \\ln(2) \\sum_{k=1}^{\\infty} \\frac{k}{2^k}$

Through infinite series summation, $\\sum \\frac{k}{2^k} = 2$. 
Thus, the Expected Utility equates to $2 \\ln(2) = \\ln(4)$. 

### Conclusion
Using Bernoulli's logarithmic standard for the subjective value of money, the expected utility accurately mirrors the absolute monetary value of **$4**. 
Therefore, despite a mathematically infinite strict expected profit, a highly rational everyday person should only be willing to pay around **$4** (or low single digits, depending on their specific risk aversion curve) to enter. $\\blacksquare$`,Qo={id:ki,title:Ti,difficulty:_i,estimatedTime:Si,statement:xi,publishDate:Ai,concepts:Pi,hints:Bi,solution:Ci},Zo=Object.freeze(Object.defineProperty({__proto__:null,concepts:Pi,default:Qo,difficulty:_i,estimatedTime:Si,hints:Bi,id:ki,publishDate:Ai,solution:Ci,statement:xi,title:Ti},Symbol.toStringTag,{value:"Module"})),Di="bridge-and-torch",Ii="The Bridge and Torch Problem",ji="Medium",Ei="30-60 minutes",Oi="Four people come to a perilous river in the dark of night. There is a narrow bridge spanning the river, but it can only hold a maximum of two people at a time. They have exactly one torch and, because the bridge is extremely dangerous, the torch must be used when crossing. Person A can cross the bridge in 1 minute, Person B in 2 minutes, Person C in 5 minutes, and Person D in 10 minutes. When two people cross the bridge together, they must move at the slower person's pace. The torch cannot be thrown across the river; it must be physically carried back across by someone. What is the minimum possible time required for all four people to successfully cross to the other side?",Wi="2026-04-08",Mi=[{name:"State Space Search",description:"A process of generating and investigating discrete states in a defined space to find a mathematically optimal path.",resourceTitle:"Graph Traversals",resourceUrl:"https://en.wikipedia.org/wiki/Graph_traversal",readTime:"8 min"},{name:"Algorithmic Optimization",description:"Improving an algorithm so it executes using fewer resources or completes faster.",resourceTitle:"Program Optimization",resourceUrl:"https://en.wikipedia.org/wiki/Program_optimization",readTime:"10 min"}],qi=[{order:1,content:"A naive approach is to use the fastest person (A, 1 minute) to ferry everyone across individually. What total time does that strategy yield?"},{order:2,content:"To minimize the total time, the two slowest people (C and D, 5 and 10) shouldn't cross separately. They should cross *together* to efficiently absorb C's time into D's time."},{order:3,content:"If C and D cross together, neither of them should be the one to carry the torch back, as that would waste time. Who needs to already be waiting on the other side to bring the torch back for them?"}],Ri=`### Step 1: The Greedy Sub-Optimal Strategy
The intuitive initial assumption is that Person A (1 minute), the fastest, should permanently shuttle the torch. Let's calculate the greedy result:
1. A and B cross: 2 minutes
2. A returns: 1 minute
3. A and C cross: 5 minutes
4. A returns: 1 minute
5. A and D cross: 10 minutes
Total time: $2 + 1 + 5 + 1 + 10 = 19$ minutes.

### Step 2: Optimizing the Bottleneck
The biggest bottleneck is that 5 and 10 cross individually. If we send C (5) and D (10) together, it only takes 10 minutes total, effectively erasing the 5-minute penalty. 
However, if we send C and D across, one of them will have to bring the torch back, which is incredibly slow.
To prevent this, someone fast needs to *already be on the target side* of the bridge so they can ferry the torch back after C and D arrive.

### Step 3: The Optimal Sequence
We utilize A and B as an advance party to shuttle the torch back and forth for the slow group.
1. **A (1) and B (2) cross together.** The time taken is 2 minutes. (Target side now has A and B).
2. **A (1) returns with the torch.** Time taken is 1 minute. (Start side now has A, C, and D).
3. **C (5) and D (10) cross together.** Time taken is 10 minutes. (Target side now has C, D, and crucially, B, who is waiting).
4. **B (2) returns with the torch.** Time taken is 2 minutes. (Start side now has A and B).
5. **A (1) and B (2) cross together for the final time.** Time taken is 2 minutes. Everyone is across.

### Conclusion
Summing the specific optimized crossing times: $2 + 1 + 10 + 2 + 2 = 17$.
The minimum absolute time required for all four to cross is **17 minutes**. $\\blacksquare$`,es={id:Di,title:Ii,difficulty:ji,estimatedTime:Ei,statement:Oi,publishDate:Wi,concepts:Mi,hints:qi,solution:Ri},ts=Object.freeze(Object.defineProperty({__proto__:null,concepts:Mi,default:es,difficulty:ji,estimatedTime:Ei,hints:qi,id:Di,publishDate:Wi,solution:Ri,statement:Oi,title:Ii},Symbol.toStringTag,{value:"Module"})),zi="three-utilities",Ui="The Three Utilities Problem",Hi="Medium",Li="30-60 minutes",Gi="There are three distinct houses (A, B, C) and three utility companies (Water, Gas, Electricity) located on a flat, infinite 2D plane. You need to connect each of the three houses to each of the three utilities using continuous line segments. The lines must be drawn purely on the 2D plane and absolutely cannot cross over or intersect each other. Is it possible to make all 9 connections mathematically without any lines crossing? If so, how? If not, logically prove why.",Ni="2026-04-08",Fi=[{name:"Planar Graphs",description:"A graph that can be embedded in the plane, i.e., it can be drawn on the plane in such a way that its edges intersect only at their endpoints.",resourceTitle:"Planar Graph",resourceUrl:"https://en.wikipedia.org/wiki/Planar_graph",readTime:"12 min"},{name:"Euler's Formula",description:"A topological formula relating the number of vertices, edges, and faces of a planar graph.",resourceTitle:"Euler Characteristic",resourceUrl:"https://en.wikipedia.org/wiki/Euler_characteristic",readTime:"15 min"}],Yi=[{order:1,content:"This is equivalent to asking if the complete bipartite graph $K_{3,3}$ is planar."},{order:2,content:"According to Euler's formula for planar graphs, $V - E + F = 2$, where V is Vertices, E is Edges, and F is contiguous Faces."},{order:3,content:"In a bipartite graph, the smallest possible enclosed cycle (face boundary) requires exactly 4 edges. Substitute this geometric boundary relation into Euler's formula."}],Ji=`### Step 1: Mapping to Graph Theory
This riddle mathematically translates to asking if the complete bipartite graph $K_{3,3}$ is a **[Planar Graph](https://en.wikipedia.org/wiki/Planar_graph)**. 
We are connecting two sets of 3 vertices to each other. The total number of Vertices ($V$) is $6$. The total number of Edges ($E$) required is $3 \\times 3 = 9$.

### Step 2: Euler's Formula
Any graph that can be drawn on a 2D plane without edges crossing must obey **[Euler's Formula](https://en.wikipedia.org/wiki/Euler_characteristic)**:
$V - E + F = 2$
Where $F$ encompasses the number of regions (Faces) divided by the drawn lines, including the infinite exterior face.
If $K_{3,3}$ were planar, we could substitute our numbers: $6 - 9 + F = 2 \\implies F = 5$. 
So, a planar drawing *must* enclose exactly 5 faces.

### Step 3: Determining Face Boundaries
Every face in a graph is bounded by a cycle of edges. In $K_{3,3}$, paths must alternate strictly between a 'House' node and a 'Utility' node. Therefore, an enclosed polygonal cycle cannot have 3 edges (which would imply a triangle between two houses or two utilities). The shortest possible cycle that can enclose an area in a bipartite graph requires at least 4 edges.
Because each face must be bounded by at least 4 edges, and every edge strictly separates at most 2 faces, we can formulate inequality:
$4F \\le 2E$
We plug in the known assumed face count ($F=5$) and actual edge count ($E=9$):
$4(5) \\le 2(9)$
$20 \\le 18$

### Conclusion
The mathematical statement $20 \\le 18$ is a contradiction. Because the edge requirements structurally violate Euler's planar boundary limit, it is structurally impossible. 
Note: By Kuratowski's Theorem, $K_{3,3}$ alongside $K_{5}$, are the foundational pillars of all non-planar graphs.
It is **impossible** to connect them without a crossing. $\\blacksquare$`,ns={id:zi,title:Ui,difficulty:Hi,estimatedTime:Li,statement:Gi,publishDate:Ni,concepts:Fi,hints:Yi,solution:Ji},is=Object.freeze(Object.defineProperty({__proto__:null,concepts:Fi,default:ns,difficulty:Hi,estimatedTime:Li,hints:Yi,id:zi,publishDate:Ni,solution:Ji,statement:Gi,title:Ui},Symbol.toStringTag,{value:"Module"})),Xi="athena_progress";function x(){try{const e=localStorage.getItem(Xi);if(e)return JSON.parse(e)}catch(e){console.error("Failed to load progress:",e)}return{solvedProblems:[],scratchpad:{},lastVisit:new Date().toISOString().split("T")[0]}}function Ki(e){try{localStorage.setItem(Xi,JSON.stringify(e))}catch(t){console.error("Failed to save progress:",t)}}function os(e){const t=x();t.solvedProblems.includes(e)||(t.solvedProblems.push(e),Ki(t))}function j(e,t){const o=x();o.scratchpad[e]=t,Ki(o)}function E(e){return x().solvedProblems.includes(e)}function ss(e){return x().scratchpad[e]||""}const as=Object.assign({"../../problems/001-duplicate-subsets.json":lo,"../../problems/002-blue-eyed-islanders.json":co,"../../problems/003-100-prisoners-boxes.json":mo,"../../problems/004-poisoned-wine.json":fo,"../../problems/005-25-horses.json":yo,"../../problems/006-three-gods.json":$o,"../../problems/007-ants-on-a-stick.json":vo,"../../problems/008-12-coin-problem.json":To,"../../problems/009-two-egg-problem.json":So,"../../problems/010-pirate-game.json":Ao,"../../problems/011-mutilated-chessboard.json":Bo,"../../problems/012-camel-and-bananas.json":Do,"../../problems/013-100-prisoners-lightbulb.json":jo,"../../problems/014-josephus-problem.json":Oo,"../../problems/015-airplane-seating.json":Mo,"../../problems/016-cheryls-birthday.json":Ro,"../../problems/017-secretary-problem.json":Uo,"../../problems/018-game-of-nim.json":Lo,"../../problems/019-prisoners-hat-parity.json":No,"../../problems/020-art-gallery.json":Yo,"../../problems/021-stable-marriage.json":Xo,"../../problems/022-party-handshake.json":Vo,"../../problems/023-st-petersburg.json":Zo,"../../problems/024-bridge-and-torch.json":ts,"../../problems/025-three-utilities.json":is}),I=Object.values(as).map(e=>e.default).sort((e,t)=>e.publishDate.localeCompare(t.publishDate));function rs(){const e=new Date().toISOString().split("T")[0],t=I.find(b=>b.publishDate===e);if(t)return t;const o=x(),a=I.filter(b=>!o.solvedProblems.includes(b.id)),i=a.length>0?a:I,l=Math.floor((new Date().getTime()-new Date("2026-04-06").getTime())/(1e3*60*60*24))*16807%2147483647%i.length;return i[l]}let g,B=new Set,k=!1,p=!1,f=[],n=[33,34,33],u=[];function O(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");t=t.replace(/^### (.*$)/gim,"<h4>$1</h4>").replace(/^## (.*$)/gim,"<h3>$1</h3>").replace(/^# (.*$)/gim,"<h2>$1</h2>").replace(/\$(.*?)\$/g,(i,s)=>`<code class="math">${s.replace(/\\dots/g,"&hellip;").replace(/\\blacksquare/g,"&#9632;").replace(/\^\{(.*?)\}/g,"<sup>$1</sup>").replace(/\^(.)/g,"<sup>$1</sup>").replace(/_\{(.*?)\}/g,"<sub>$1</sub>").replace(/_(.)/g,"<sub>$1</sub>")}</code>`).replace(/\[(.*?)\]\((.*?)\)/g,(i,s,r)=>{const l=s.replace(/<[^>]*>?/gm,"");return`<a href="${r}" data-reader-link="true" data-url="${r}" data-title="${l}">${s}</a>`}).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>");const a=t.split(`

`).map(i=>/^<(h\d|ul|ol|li|blockquote|pre)>/.test(i.trim())?i:`<p>${i.replace(/\n/g,"<br>")}</p>`).join(`
`);return console.log("Parsed Markdown Result:",a),a}function ls(){const e=g,t=E(e.id);return`
    <div class="problem-card">
      <div class="problem-header">
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <h2 class="problem-title">${e.title}</h2>
          ${us(e,t)}
          ${t?ms():""}
        </div>
        <div class="problem-meta">
          <span class="difficulty ${e.difficulty.toLowerCase()}">${e.difficulty}</span>
          <span class="time-estimate">${e.estimatedTime}</span>
        </div>
      </div>
      <div class="problem-statement">${O(e.statement)}</div>
      ${hs(e)}
      ${cs(e)}
      ${ds(e)}
    </div>
  `}function hs(e){return!e.concepts||e.concepts.length===0?"":`
    <div class="concepts-section">
      <div class="section-title">Concepts to Learn</div>
      <div class="concept-grid">
        ${e.concepts.map((t,o)=>`
          <div class="concept-card">
            <div class="concept-name">${t.name}</div>
            <div class="concept-desc">${t.description}</div>
            <button class="concept-link-btn" onclick="window.openReader(${o})">
              ${t.resourceTitle}<span class="read-time">· ${t.readTime}</span>
            </button>
          </div>
        `).join("")}
      </div>
    </div>
  `}function cs(e){return!e.hints||e.hints.length===0?"":`
    <div class="hints-section">
      <div class="section-title">Hints</div>
      <div class="hint-accordion">
        ${e.hints.map(t=>`
          <div class="hint-item ${B.has(t.order)?"open":""}" data-hint="${t.order}">
            <div class="hint-header" onclick="window.toggleHint(${t.order})">
              <span class="hint-label">
                <span class="hint-number">${t.order}</span>
                Hint ${t.order}
              </span>
              <span class="hint-arrow">▼</span>
            </div>
            <div class="hint-content">
              <div class="hint-text">${O(t.content)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ds(e){return`
    <div class="solution-section">
      <button class="solution-toggle" onclick="window.toggleSolution()">
        <span class="icon">🔓</span>
        <span>${k?"Hide Solution":"Reveal Solution"}</span>
      </button>
      <div class="solution-content ${k?"open":""}">
        <div class="solution-text">${O(e.solution)}</div>
      </div>
    </div>
  `}function us(e,t){return t?"":`
    <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" onclick="window.markSolved('${e.id}')">
      ✓ Mark as Solved
    </button>
  `}function Vi(){const e=new Date,t=new Date(e);t.setDate(t.getDate()+1),t.setHours(0,0,0,0);const o=t.getTime()-e.getTime(),a=Math.floor(o/(1e3*60*60)),i=Math.floor(o%(1e3*60*60)/(1e3*60)),s=Math.floor(o%(1e3*60)/1e3);return`${a.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}let S=null;function ms(){return`
    <div class="completed-badge" style="display: flex; align-items: center; gap: 1rem; border: 2px solid var(--success); color: var(--success); padding: 0.5rem 1rem; font-family: var(--font-mono); font-weight: 800; text-transform: uppercase; font-size: 0.85rem;">
      <span>🎉 Completed!</span>
      <div class="countdown-timer" style="display: flex; gap: 0.5rem; padding-top: 0; border-top: none; align-items: center; width: auto;">
        <span class="countdown-label" style="font-size: 0.75rem;">Next:</span>
        <span class="countdown-value" id="countdown" style="font-size: 1rem;">${Vi()}</span>
      </div>
    </div>
  `}function Qi(){S&&clearInterval(S);const e=document.getElementById("countdown");e&&(S=setInterval(()=>{const t=Vi();e.textContent=t,t==="00:00:00"&&(clearInterval(S),S=null,C())},1e3))}function ps(){E(g.id)&&Qi()}function fs(){const e=ss(g.id);return`
    <div class="notes-card">
      <div class="notes-header">
        <span class="notes-title">Notes</span>
      </div>
      <div 
        class="scratchpad" 
        contenteditable="true"
        data-placeholder="Write your reasoning, work, and notes here..."
        oninput="window.saveScratchpad('${g.id}', this.innerHTML)"
        onpaste="window.handleNotesPaste(event, '${g.id}')"
        style="overflow-y: auto; outline: none; border-radius: 0; border: none; background: transparent; flex: 1; padding: 1rem;"
      >${e}</div>
    </div>
  `}function gs(){return!p||f.length===0?"":`
    <div style="display: grid; grid-template-rows: ${u.map((t,o)=>o<u.length-1?`${t}fr 8px`:`${t}fr`).join(" ")}; height: 100%; width: 100%;">
      ${f.map((t,o)=>{const a=g.concepts[t];return`
          <div class="reader-pane" style="height: 100%; min-height: 0; display: flex; flex-direction: column;">
            <div class="reader-header-bar">
              <span class="reader-title-bar">${a.resourceTitle}</span>
              <button class="reader-close-btn" onclick="window.closeReader(${t})">✕</button>
            </div>
            <iframe 
              class="reader-iframe" 
              src="${a.resourceUrl}" 
              sandbox="allow-same-origin allow-scripts allow-forms"
              style="height: 100%; flex: 1; border: none; background: #ffffff;"
            ></iframe>
          </div>
          ${o<f.length-1?`
            <div class="v-resizer" data-vindex="${o}" style="cursor: row-resize; background: transparent; position: relative;">
              <div style="position: absolute; left: 20%; right: 20%; top: 50%; transform: translateY(-50%); height: 4px; border-radius: 2px; background: var(--border-glass); transition: background 0.2s;"></div>
            </div>
          `:""}
        `}).join("")}
    </div>
  `}function ys(){const e=p;return`
    <main class="workspace" style="grid-template-columns: ${e?`${n[0]}% 8px ${n[1]}% 8px ${n[2]}%`:`${n[0]}% 8px ${n[1]}%`}">
      <div class="pane problem-pane" style="width: 100%">
        ${ls()}
      </div>
      <div class="resizer" data-index="0"></div>
      <div class="pane notes-pane" style="width: 100%">
        ${fs()}
      </div>
      ${e?`
        <div class="resizer" data-index="1"></div>
        <div class="pane reader-container" style="width: 100%; min-height: 0;">
          ${gs()}
        </div>
      `:""}
    </main>
  `}function Zi(){return g=rs(),`
    <header>
      <div class="logo">ATH<span>ENA</span></div>
      <div class="tagline">Daily Problem</div>
    </header>
    ${ys()}
  `}window.toggleHint=e=>{const t=document.querySelector(`.hint-item[data-hint="${e}"]`);t&&(B.has(e)?(B.delete(e),t.classList.remove("open")):(B.add(e),t.classList.add("open")))};window.toggleSolution=()=>{k=!k;const e=document.querySelector(".solution-toggle span:last-child"),t=document.querySelector(".solution-content");e&&(e.textContent=k?"Hide Solution":"Reveal Solution"),t&&(k?t.classList.add("open"):t.classList.remove("open"))};window.markSolved=e=>{os(e),C()};window.saveScratchpad=(e,t)=>{j(e,t)};window.handleNotesPaste=(e,t)=>{if(e.clipboardData&&e.clipboardData.files&&e.clipboardData.files.length>0){const o=e.clipboardData.files[0];if(o.type.startsWith("image/")){e.preventDefault();const a=new FileReader;a.onload=i=>{var l;const s=(l=i.target)==null?void 0:l.result;document.execCommand("insertImage",!1,s);const r=e.target;r&&j(t,r.innerHTML)},a.readAsDataURL(o)}}else if(e.clipboardData){const o=e.clipboardData.getData("text/plain");if(o){e.preventDefault(),document.execCommand("insertText",!1,o);const a=e.target;a&&j(t,a.innerHTML)}}};window.openReader=e=>{const t=g.concepts[e];window.openReaderByLink(null,t.resourceUrl,t.resourceTitle)};window.openReaderByLink=(e,t,o)=>{if(e&&e.preventDefault(),f.findIndex(s=>{var r;return((r=g.concepts[s])==null?void 0:r.resourceUrl)===t})===-1){const s=g.concepts.findIndex(l=>l.resourceUrl===t);if(s!==-1)f.push(s);else{const l=o.replace(/<[^>]*>?/gm,""),b={name:l,description:"",resourceTitle:l,resourceUrl:t,readTime:""};g.concepts.push(b),f.push(g.concepts.length-1)}const r=f.length;u=f.map(()=>100/r)}const i=p;p=f.length>0,!i&&p&&(n.length===2||n[2]===0)&&(n[0]>33?(n[0]-=33,n[2]=33):n=[33,34,33]),C()};document.addEventListener("click",e=>{const o=e.target.closest('a[data-reader-link="true"]');if(o){e.preventDefault();const a=o.dataset.url||"",i=o.dataset.title||"";window.openReaderByLink(null,a,i)}});window.closeReader=e=>{if(f=f.filter(t=>t!==e),p=f.length>0,!p)n=[n[0]+n[2],n[1],0];else{const t=f.length;u=f.map(()=>100/t)}C()};function C(){document.querySelector("#app").innerHTML=Zi(),bs(),E(g.id)&&Qi()}function bs(){const e=document.querySelectorAll(".resizer");let t=!1,o=null,a=0,i=[];const s=document.querySelectorAll(".v-resizer");let r=!1,l=null,b=0,$=[];s.forEach(d=>{d.addEventListener("dblclick",()=>{const h=parseInt(d.dataset.vindex||"0");u[h]<5?(u[h]=50,u[h+1]=50):(u[h+1]+=u[h]-5,u[h]=5);const c=d.parentElement;c&&(c.style.gridTemplateRows=u.map((y,v)=>v<u.length-1?`${y}fr 8px`:`${y}fr`).join(" "))}),d.addEventListener("mousedown",h=>{r=!0,l=d,b=h.clientY,$=[...u],document.body.style.cursor="row-resize",document.body.style.userSelect="none";const c=document.querySelector(".workspace");c&&(c.style.pointerEvents="none"),h.stopPropagation()})}),e.forEach(d=>{d.addEventListener("dblclick",()=>{const h=parseInt(d.dataset.index||"0"),c=5;h===0?n[0]<=c?(n[1]=n[1]+n[0]-(50-(p?n[2]/2:0)),n[0]=50-(p?n[2]/2:0)):(n[1]=n[1]+n[0]-c,n[0]=c):h===1&&p&&(n[2]<=c?(n[1]=n[1]+n[2]-33,n[2]=33):(n[1]=n[1]+n[2]-c,n[2]=c));const y=p?`${n[0]}fr 8px ${n[1]}fr 8px ${n[2]}fr`:`${n[0]}fr 8px ${n[1]}fr`,v=document.querySelector(".workspace");v&&(v.style.gridTemplateColumns=y)}),d.addEventListener("mousedown",h=>{t=!0,o=d,a=h.clientX,i=[...n],document.body.style.cursor="col-resize",document.body.style.userSelect="none";const c=document.querySelector(".workspace");c&&(c.style.pointerEvents="none")})}),document.addEventListener("mousemove",d=>{if(r&&l!==null){const m=parseInt(l.dataset.vindex||"0"),T=d.clientY-b,_=l.parentElement,to=(_==null?void 0:_.offsetHeight)||window.innerHeight,no=T/to*100,D=[...$],M=5;let P=$[m]+no;const io=$[m]+$[m+1]-M;P=Math.max(M,Math.min(io,P));const oo=P-$[m];D[m]=P,D[m+1]=$[m+1]-oo,u=D;const so=u.map((q,ao)=>ao<u.length-1?`${q}fr 8px`:`${q}fr`).join(" ");_&&(_.style.gridTemplateRows=so);return}if(!t||o===null)return;const h=parseInt(o.dataset.index||"0"),c=d.clientX-a,y=document.querySelector(".workspace"),v=(y==null?void 0:y.offsetWidth)||window.innerWidth,W=c/v*100,w=[...i],A=5;if(h===0){let m=i[0]+W;const T=100-A-(p?i[2]:0);m=Math.max(A,Math.min(T,m)),w[0]=m,w[1]=100-w[0]-(p?i[2]:0)}else if(h===1&&p){let m=i[1]+W;const T=100-i[0]-A;m=Math.max(A,Math.min(T,m)),w[1]=m,w[2]=100-i[0]-w[1]}n=w;const eo=p?`${n[0]}fr 8px ${n[1]}fr 8px ${n[2]}fr`:`${n[0]}fr 8px ${n[1]}fr`;y&&(y.style.gridTemplateColumns=eo)}),document.addEventListener("mouseup",()=>{r&&(r=!1,l=null),t&&(t=!1,o=null),document.body.style.cursor="",document.body.style.userSelect="";const d=document.querySelector(".workspace");d&&(d.style.pointerEvents="")})}document.querySelector("#app").innerHTML=Zi();ps();document.addEventListener("copy",e=>{const t=window.getSelection();t&&!t.isCollapsed&&e.clipboardData&&(e.clipboardData.setData("text/plain",t.toString()),e.preventDefault())});
