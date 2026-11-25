/* Legend: ! = Must, ~ = Should, - = Nice. "## id|Title|Group" starts a section, "# Name" a subsection. */
const RAW = `
## found|ML & deep learning foundations|Topics
# Core
!Gradient descent & backpropagation
!Loss functions (MSE, cross-entropy)
!Overfitting, regularization, dropout
!Train / validation / test split
!Optimizers (SGD, Adam)
!Normalization (batch, layer)
!TensorFlow tensors & GradientTape (autodiff)
~Embeddings
-Weight initialization
# Build
!Project: train a small MLP in TensorFlow, hand-write the training loop

## rnn|RNNs|Topics
# Core
!Sequential data
!Hidden state
!Unrolling through time
!Backpropagation through time (BPTT)
!Vanishing / exploding gradients
!Gradient clipping
!LSTM gates (forget, input, output)
!GRU
~Bidirectional RNN
~Teacher forcing
# Math
!h_t = tanh(Wx_t + Uh_(t-1) + b)
!LSTM cell state equations
~Why gradients vanish (Jacobian product)
# Differentiators
!Encoder-decoder (seq2seq)
!Context-vector bottleneck
!Bahdanau attention (why it was invented)
!Why RNNs can't parallelize
~Padding, masking, packed sequences
~Truncated BPTT
# Build
!Project: character-level LSTM text generator

## tf|Transformers & attention|Topics
# Core
!Tokens to embeddings
!Positional encoding
!Self-attention
!Query, key, value
!Multi-head attention
!Residual connections
!Layer norm
!Feed-forward block
!Causal masking
!Encoder-only vs decoder-only vs encoder-decoder
~Cross-attention
~Pre-LN vs Post-LN
~RoPE / ALiBi
~FlashAttention
-Sliding-window / sparse attention
# Math
!softmax(QKᵀ/√d)V
!Why divide by √d
!O(n²) attention cost
~Parameter count of a block
~Perplexity from cross-entropy
# Differentiators
!Attention as soft lookup
!Why parallelism beats recurrence
!Which architecture for which task
!Multi-query / grouped-query attention
~Reading attention maps
# Build
!Project: mini-GPT from scratch (nanoGPT-style)

## llm|LLMs: architecture & building|Topics
# Core
!Tokenization (BPE, WordPiece)
!Next-token pretraining
!Scaling laws
!Prompting vs fine-tuning
!Supervised fine-tuning (SFT)
!RLHF / DPO
!LoRA / QLoRA
!Sampling (temperature, top-k, top-p)
!Context window
!Mixture of Experts
~Data curation & deduplication
~Mixed precision (fp16 / bf16)
~Distributed training (DP, TP, PP, ZeRO)
~Distillation
# Math
!Softmax with temperature
!Training compute ≈ 6ND
!Memory ≈ params × bytes per param
~Adam, LR warmup & decay
# Inference & optimization
!KV cache
!Quantization (int8, int4, GGUF)
!Running LLMs on CPU (llama.cpp, Ollama)
!Time to first token vs tokens per second
!Batching: throughput vs latency
!Decoding is memory-bandwidth bound
~Speculative decoding
~Prefix / prompt caching
~Model size vs RAM planning
# Failure modes
!Hallucination
!Prompt injection
!Context-length cost & lost-in-the-middle
~Knowledge cutoff
~Non-determinism
# Build
!Project: LoRA fine-tune a small model, run it quantized on CPU

## eval|Evaluating LLMs|Topics
# Core
!Perplexity
!Precision, recall, F1, accuracy
!BLEU, ROUGE
!BERTScore
!Benchmarks (MMLU, GSM8K, HumanEval, HellaSwag, TruthfulQA)
!Human evaluation
!LLM-as-judge
!Pairwise Elo (Chatbot Arena)
~pass@k
~Calibration
# Differentiators
!Benchmark contamination
!Golden test set from your own task
!Judge bias (position, verbosity, self-preference)
!Offline vs online evaluation
!Regression tests for prompt changes
!Task-specific metrics beat generic ones
!Quality / cost / latency trade-off
~Inter-annotator agreement
# Manual checks per domain
!Faithfulness / hallucination rate
!Refusal correctness
!Toxicity & bias probes
!Robustness to paraphrase
!Red-teaming
~Tools: lm-eval-harness, Ragas, DeepEval, promptfoo
# Build
!Project: eval harness comparing two models on a golden set

## ops|AI / MLOps|Topics
# Deployment
!Serving modes (REST, batch, streaming)
!Docker
!CI/CD for ML
!Experiment tracking (MLflow, W&B)
!Data & model versioning
!Model registry
~Kubernetes basics
~Canary / shadow / A-B rollout
~Rollback strategy
~Feature stores
# Serving LLMs
!vLLM / TGI
!Continuous batching
!PagedAttention
!GPU vs CPU cost
!Streaming (SSE)
~Semantic caching
~Rate limiting
~Autoscaling
# Monitoring
!Latency (p50, p95, p99)
!Token usage & cost per request
!Data drift
!Concept / model drift
!Output quality monitoring
!Logging & tracing (Langfuse, OpenTelemetry)
!User feedback loop
~Alerting
~Retraining triggers
# Math
~Drift tests (PSI, KS test)
# Build
!Project: FastAPI model service with Docker, logging & metrics

## cv|Computer vision|Topics
# Core
!Pixels, channels, tensors
!Convolution & kernels
!Stride, padding, pooling
!CNN architecture
!ResNet & skip connections
!Transfer learning
!Data augmentation
!Classification, detection (YOLO, R-CNN), segmentation (U-Net)
~Batch norm
~OCR
-GANs
# Math
!Conv output size formula
!IoU
!Conv layer parameter count
~mAP
~Receptive field
# Differentiators
!Vision Transformer (ViT)
!CLIP (image-text embeddings)
!Multimodal LLMs
!Data leakage & class imbalance
~Diffusion models basics
~Self-supervised (DINO)
# Real-world checks
!Labeling quality & dataset bias
!Lighting / domain shift
!Edge deployment (ONNX, TFLite)
~FPS vs accuracy trade-off
# Build
!Project: CLIP-based image search or fine-tuned ResNet classifier

## agent|AI agents & agentic workflows|Topics
# Core
!LLM + tools + loop
!Function / tool calling
!ReAct pattern
!Planning
!Short-term vs long-term memory
!LangChain & LangGraph
!Structured output (JSON schema)
~Reflection / self-critique
~Multi-agent systems
~Human-in-the-loop
# Workflow patterns
!Workflow vs agent
!Prompt chaining
!Routing
!Parallelization
!Orchestrator-workers
!Evaluator-optimizer
# Real-world checks
!Max steps & loop detection
!Tool permissions & sandboxing
!Prompt injection through tool output
!Retries & error handling
!Cost limits
!Tracing every step
!Evaluating task success
~Idempotent tools
# Build
!Project: research agent with search + calculator tools and a step limit

## rag|RAG|Topics
# Core
!Embeddings
!Vector databases (FAISS, Chroma, pgvector)
!Chunking strategies
!Top-k retrieval
!Prompt augmentation
!Citations
~Hybrid search (BM25 + vectors)
~Reranking (cross-encoder)
~Query rewriting
~Metadata filtering
# Math
!Cosine similarity
~ANN indexes (HNSW, IVF)
~Recall@k, MRR, nDCG
# Differentiators
!Chunk size & overlap trade-off
!Retrieval failure vs generation failure
!RAG vs fine-tuning
!Embedding model choice
~Agentic RAG
~Graph RAG
# Real-world checks
!Grounding & "I don't know" behavior
!Faithfulness & context precision (Ragas)
!Stale / duplicate documents
!Access control per document
!PII in documents
# Build
!Project: RAG over your own PDFs with citations

## mcp|MCP & integrations|Topics
# Core
!What problem MCP solves
!Host, client, server
!Tools, resources, prompts
!JSON-RPC
!stdio vs HTTP transport
!Writing an MCP server (Python SDK)
~Connecting a server to an MCP client
~Good tool descriptions & schemas
~MCP vs function calling vs plain REST
# Real-world checks
!Auth (OAuth)
!Least-privilege permissions
!Tool poisoning & injection
!Human approval for risky actions
~Versioning & error handling
# Build
!Project: MCP server exposing your notes or a SQLite DB

## guard|Guardrails & reliability (added)|Topics
# Boundaries
!System prompt scope limits
!Input validation
!Output validation
!Schema-constrained decoding
!Topic restriction & refusal rules
!PII redaction
!Prompt injection defense
!Jailbreak awareness
~Moderation APIs
~Guardrails frameworks (NeMo, Guardrails AI)
# Reliability
!Temperature 0 for determinism
!Timeouts, retries, fallback models
!Confidence thresholds & human escalation
!Cost & rate budgets
!Audit logging
# Responsible AI
!Bias & fairness
!Privacy & data retention
~Licensing
~Model cards
-EU AI Act basics

## p1|Attention Is All You Need (2017)|Papers
!Scaled dot-product attention
!Multi-head attention
!Sinusoidal positional encoding
!Encoder-decoder stack
!Masked decoder self-attention
!Self-attention vs RNN/CNN (path length)
~Warmup LR schedule
~Label smoothing
-BLEU results

## p2|BERT (2018)|Papers
!Masked language modeling
!Bidirectional encoder
!Pretrain then fine-tune
!CLS & SEP tokens
~Next sentence prediction (and why it was dropped)
~Segment embeddings
~WordPiece
~GLUE / SQuAD
-RoBERTa improvements

## p3|GPT-3: Few-Shot Learners (2020)|Papers
!In-context learning
!Zero / one / few-shot
!Decoder-only autoregressive model
!Scale as the main lever
~Training data mix
~Contamination discussion
~Bias & limitations section
-175B model details

## p4|Chinchilla: Compute-Optimal LLMs (2022)|Papers
!Parameters vs tokens trade-off
!~20 tokens per parameter rule
!Undertrained models
~IsoFLOP curves
~Chinchilla 70B vs Gopher 280B
~Over-training for cheaper inference (Llama idea)
-Data bottleneck

## p5|LoRA (2021)|Papers
!Low-rank update ΔW = BA
!Rank r & alpha
!Frozen base weights
!Merge adapters: no inference latency
~Which layers to adapt (q, v)
~Intrinsic dimension idea
~Adapter swapping per task
~QLoRA (NF4, paged optimizers)

## p6|RAG paper (2020)|Papers
!Parametric vs non-parametric memory
!Retriever + generator design
~DPR retriever
~RAG-Sequence vs RAG-Token
~Marginalization over documents
~Updatable index
-Open-domain QA results

## p7|InstructGPT / RLHF (2022)|Papers
!Alignment problem
!SFT then reward model then PPO
!Reward model from human comparisons
!KL penalty to the base model
~Bradley-Terry loss
~Alignment tax
~Helpful, honest, harmless
-Small aligned model beats big raw model

## p8|ReAct (2022)|Papers
!Thought, Action, Observation loop
!Reasoning + acting together
~Chain-of-thought connection
~Few-shot prompt format
~Tool use via Wikipedia API
~Failure modes (loops, bad retrieval)
-HotpotQA / ALFWorld results

## p9|Generative Agents (2023)|Papers
!Memory stream
!Retrieval score (recency, importance, relevance)
!Reflection
!Planning
~Believability evaluation
~Ablations
-Emergent social behavior
-Ethics section

## p10|PagedAttention / vLLM (2023)|Papers
!KV cache memory fragmentation problem
!Block-based KV cache paging
!Block tables
~Copy-on-write & prefix sharing
~Continuous batching link
~Preemption & swapping
-Throughput gains vs baselines

## px|Extra papers worth skimming (added)|Papers
!Sequence to Sequence Learning (2014)
!Neural Machine Translation by Jointly Learning to Align and Translate (2014)
!Chain-of-Thought Prompting (2022)
!FlashAttention (2022)
!DPO: Direct Preference Optimization (2023)
~Deep Residual Learning / ResNet (2015)
~An Image is Worth 16x16 Words / ViT (2020)
~CLIP (2021)
~Llama / Llama 2 (2023)
~Mixtral of Experts (2024)
~Scaling Laws for Neural LMs (2020)
~Constitutional AI (2022)
-LSTM (1997)
-Word2Vec (2013)
-Toolformer (2023)

## proj|Medium projects by topic|Projects
# Foundations
!MLP on MNIST with a hand-written TensorFlow training loop
# RNNs
!Character-level LSTM text generator
~Seq2seq with attention: date-format translator
# Transformers
!Mini-GPT from scratch on a small text corpus
~Transformer encoder text classifier
# LLMs
!LoRA fine-tune a small model on a custom instruction set
!Quantized model on CPU: benchmark tokens per second
~Add a KV cache to your mini-GPT and measure the speedup
# Evaluation
!Eval harness: golden set, metrics, LLM-as-judge, model comparison table
# MLOps
!FastAPI LLM service in Docker with streaming, logging and latency metrics
~Input drift detector on logged requests
# Computer vision
!Transfer-learning ResNet on a custom dataset
!CLIP-based image search
~YOLO detection on your own images
# Agents
!Research agent with tools, step limit and traces
~LangGraph workflow with routing and human approval
# RAG
!RAG over your PDFs with citations
~Hybrid search + reranker: compare recall@k
# MCP
!MCP server over your notes or a SQLite DB
~Connect two MCP servers to one agent
# Guardrails
!Input/output validators and refusal rules for the RAG app
~Prompt injection test suite

## projp|Papers to implement yourself|Projects
# Must implement
!Attention Is All You Need: scaled dot-product and multi-head attention from scratch
!Attention Is All You Need: tiny encoder-decoder on a toy translation task
!LoRA: write a LoRA layer in TensorFlow and merge the weights
!RAG paper: retriever + generator pipeline with FAISS
!ReAct: Thought-Action-Observation loop without a framework
!InstructGPT / DPO: reward model or DPO loss on toy preference pairs
# Should implement
~BERT: masked language modeling on a small corpus
~PagedAttention: toy block-based KV cache allocator
~Generative Agents: memory stream with recency, importance, relevance retrieval
~GPT-3: zero-shot vs few-shot prompt experiments
~Chinchilla: fit a scaling curve on small model sizes
~FlashAttention: compare naive vs fused attention memory use

## cap|Capstone: private document assistant (3-4 hours)|Projects
# Steps
!Ingest PDFs, chunk, embed, store in Chroma or FAISS
!Answer questions with citations
!Refuse when retrieval confidence is low
!Expose search_docs as an MCP server
!Write a 20-question golden set; measure recall@k and faithfulness
!Vary chunk size and compare scores
!Log latency, tokens and retrieved chunks
!Explain every file of the code in your own words
`;

/* ---------- parse ---------- */
const sections = [];
let cur, sub;
RAW.trim().split("\n").forEach(l => {
  l = l.trim();
  if (!l) return;
  if (l.startsWith("## ")) {
    const [id, title, group] = l.slice(3).split("|");
    cur = { id, title, group, subs: [] };
    sub = { name: "", items: [] };
    cur.subs.push(sub);
    sections.push(cur);
  } else if (l[0] === "#") {
    sub = { name: l.slice(2), items: [] };
    cur.subs.push(sub);
  } else {
    const t = l.slice(1);
    sub.items.push({ t, p: l[0] === "!" ? "M" : l[0] === "~" ? "S" : "N", k: cur.id + ":" + t });
  }
});
sections.forEach(s => (s.subs = s.subs.filter(x => x.items.length)));
const PL = { M: "Must", S: "Should", N: "Nice" };

/* ---------- state (persisted in localStorage) ---------- */
const KEY = "ai-eng-checklist-v1";
let state = { done: {}, open: { found: true }, f: "A", q: "", hide: false };
try {
  const s = JSON.parse(localStorage.getItem(KEY));
  if (s && s.done) state = Object.assign(state, s);
} catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = id => document.getElementById(id);

/* ---------- render ---------- */
function stats(items) {
  const d = items.filter(i => state.done[i.k]).length;
  return [d, items.length];
}
const all = sections.flatMap(s => s.subs.flatMap(x => x.items));

function show(i) {
  if (state.f !== "A" && i.p !== state.f) return false;
  if (state.hide && state.done[i.k]) return false;
  if (state.q && !i.t.toLowerCase().includes(state.q.toLowerCase())) return false;
  return true;
}

function render() {
  const [d, n] = stats(all);
  const [dm, nm] = stats(all.filter(i => i.p === "M"));
  const pct = Math.round((d / n) * 100);
  $("overall").innerHTML = `${d} of ${n} done (${pct}%). Must-have items: ${dm} of ${nm}.<div class="bar"><i style="width:${pct}%"></i></div>`;
  document.querySelectorAll("#filters button").forEach(b => b.classList.toggle("on", b.dataset.f === state.f));

  let nav = "", lastG = "";
  sections.forEach(s => {
    const [sd, sn] = stats(s.subs.flatMap(x => x.items));
    if (s.group !== lastG) { nav += `<h3>${s.group}</h3>`; lastG = s.group; }
    nav += `<a href="#${s.id}" class="${sd === sn ? "full" : ""}">${esc(s.title)}<span>${sd}/${sn}</span></a>`;
  });
  $("nav").innerHTML = nav;

  let html = "", any = false;
  sections.forEach(s => {
    const [sd, sn] = stats(s.subs.flatMap(x => x.items));
    const subs = s.subs.map(x => ({ name: x.name, items: x.items.filter(show) })).filter(x => x.items.length);
    const filtering = state.q || state.f !== "A" || state.hide;
    if (filtering && !subs.length) return;
    any = true;
    const open = state.open[s.id] || (state.q && subs.length);
    html += `<details id="${s.id}" ${open ? "open" : ""}><summary><h2>${esc(s.title)}</h2><span class="cnt">${sd}/${sn}</span></summary><div class="body">`;
    subs.forEach(x => {
      if (x.name) html += `<div class="sub">${esc(x.name)}</div>`;
      x.items.forEach(i => {
        html += `<label class="item ${state.done[i.k] ? "done" : ""}"><input type="checkbox" data-k="${esc(i.k)}" ${state.done[i.k] ? "checked" : ""}><span class="t">${esc(i.t)}</span><span class="tag ${i.p}">${PL[i.p]}</span></label>`;
      });
    });
    html += `</div></details>`;
  });
  $("main").innerHTML = any ? html : `<p class="empty">No concepts match these filters.</p>`;
}

/* ---------- events ---------- */
$("main").addEventListener("change", e => {
  const k = e.target.dataset.k;
  if (!k) return;
  e.target.checked ? (state.done[k] = 1) : delete state.done[k];
  save(); render();
});
$("main").addEventListener("toggle", e => {
  if (e.target.tagName !== "DETAILS" || state.q) return;
  e.target.open ? (state.open[e.target.id] = 1) : delete state.open[e.target.id];
  save();
}, true);
$("q").addEventListener("input", e => { state.q = e.target.value; render(); });
$("q").value = state.q;
$("hide").checked = state.hide;
$("hide").addEventListener("change", e => { state.hide = e.target.checked; save(); render(); });
$("filters").addEventListener("click", e => { if (e.target.dataset.f) { state.f = e.target.dataset.f; save(); render(); } });
$("nav").addEventListener("click", e => {
  const a = e.target.closest("a");
  if (a) state.open[a.getAttribute("href").slice(1)] = 1;
});
$("exp").addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(state, null, 1)], { type: "application/json" }));
  a.download = "ai-checklist-progress.json";
  a.click();
});
$("imp").addEventListener("click", () => $("file").click());
$("file").addEventListener("change", e => {
  const r = new FileReader();
  r.onload = () => {
    try { const s = JSON.parse(r.result); if (s.done) { state = Object.assign(state, s); save(); render(); } } catch (x) { alert("That file is not a valid progress export."); }
  };
  if (e.target.files[0]) r.readAsText(e.target.files[0]);
});
$("rst").addEventListener("click", () => {
  if (confirm("Clear all progress? This cannot be undone.")) { state.done = {}; save(); render(); }
});
render();
